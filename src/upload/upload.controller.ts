import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../users/user.entity';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('upload')
export class UploadController {
  @Post('image')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `image-${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        const allowedExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const ext = extname(file.originalname).toLowerCase();
        if (!allowedMimes.includes(file.mimetype) || !allowedExts.includes(ext)) {
          return callback(new Error('Sadece resim dosyaları yüklenebilir!'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { success: false, message: 'Dosya yüklenemedi' };
    }

    const imageUrl = `/upload/images/${file.filename}`;
    return {
      success: true,
      message: 'Resim başarıyla yüklendi',
      url: imageUrl,
      filename: file.filename,
    };
  }

  @Get('images/:filename')
  getImage(@Param('filename') filename: string, @Res() res: Response) {
    // Path traversal koruması: sadece basit dosya adına izin ver
    if (!filename || filename.includes('/') || filename.includes('\\') || filename.includes('..')) {
      return res.status(400).json({ message: 'Geçersiz dosya adı' });
    }

    const allowedExts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const ext = path.extname(filename).toLowerCase();
    if (!allowedExts.includes(ext)) {
      return res.status(400).json({ message: 'Geçersiz dosya tipi' });
    }

    const uploadsDir = path.resolve(process.cwd(), 'uploads');
    const filePath = path.resolve(uploadsDir, filename);

    // Çözümlenen yol uploads klasörü dışına çıkıyor mu?
    if (!filePath.startsWith(uploadsDir + path.sep)) {
      return res.status(400).json({ message: 'Geçersiz dosya yolu' });
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'Resim bulunamadı' });
    }

    res.setHeader('Content-Disposition', 'inline');
    return res.sendFile(filePath);
  }

  @Get('list')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  listImages() {
    const uploadDir = path.join(process.cwd(), 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
      return { success: true, images: [] };
    }

    const files = fs.readdirSync(uploadDir);
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        url: `/upload/images/${file}`,
        uploadDate: fs.statSync(path.join(uploadDir, file)).mtime,
      }))
      .sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());

    return { success: true, images };
  }
}

