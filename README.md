
Tüm sistemi (Backend + Frontend + Veritabanı) tek komutla ayağa kaldırmak için:

### 1. Projeyi İndirin ve Hazırlayın
Sunucuda backend klasörüne gidin:
```bash
cd adorego-backend
```

### 2. Docker Konteynerlerini Başlatın
```bash
docker-compose up -d --build
```
Bu komut:
- PostgreSQL veritabanını (`5433` portunda)
- Backend servisini (`3002` portunda)
- Frontend servisini (`3001` portunda)
başlatır.

## 💾 Veritabanı Yedeğini Yükleme 

Proje içerisinde `adorego_backup.sql` adında bir veritabanı yedeği bulunmaktadır. Sistemi ilk kez kurduğunuzda verileri geri yüklemek için şu adımları izleyin:

1. **Önce mevcut şemayı temizleyin (Hata almamak için):**
```bash
docker exec -i adorego-postgres psql -U postgres -d adorego -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
```

2. **Yedeği içeri aktarın:**
```bash
cat adorego_backup.sql | docker exec -i adorego-postgres psql -U postgres -d adorego
```

Bu işlemden sonra tüm tablolar ve veriler (kullanıcılar, içerikler vb.) yüklenmiş olacaktır.
