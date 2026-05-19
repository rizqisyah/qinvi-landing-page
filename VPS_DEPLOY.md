# Deploy qinvi React + Vite ke VPS

Panduan ini cocok untuk VPS Ubuntu dengan Nginx.

## 1. Install kebutuhan server

```bash
sudo apt update
sudo apt install -y nginx git curl
```

Install Node.js. Contoh memakai NodeSource Node 22:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

## 2. Upload / clone project

Contoh folder deploy:

```bash
sudo mkdir -p /var/www/qinvi
sudo chown -R $USER:$USER /var/www/qinvi
cd /var/www/qinvi
```

Kalau dari GitHub:

```bash
git clone https://github.com/USERNAME/qinvi.git .
```

Ganti `USERNAME/qinvi` sesuai repo kamu.

## 3. Install dependency dan build

```bash
npm ci
npm run build
```

Setelah build, file static ada di:

```txt
/var/www/qinvi/dist
```

## 4. Setup Nginx

Buat file konfigurasi:

```bash
sudo nano /etc/nginx/sites-available/qinvi
```

Isi:

```nginx
server {
    listen 80;
    server_name qinvi.com www.qinvi.com;

    root /var/www/qinvi/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

Aktifkan config:

```bash
sudo ln -s /etc/nginx/sites-available/qinvi /etc/nginx/sites-enabled/qinvi
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Arahkan domain

Di DNS domain kamu, buat record:

```txt
A     @      IP_VPS_KAMU
A     www    IP_VPS_KAMU
```

Tunggu propagasi DNS.

## 6. Pasang HTTPS SSL

Install Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

Generate SSL:

```bash
sudo certbot --nginx -d qinvi.com -d www.qinvi.com
```

Cek auto-renewal:

```bash
sudo certbot renew --dry-run
```

## 7. Update website berikutnya

Setiap ada perubahan:

```bash
cd /var/www/qinvi
git pull origin main
npm ci
npm run build
sudo systemctl reload nginx
```

## Alternatif: pakai script deploy

Edit `deploy/deploy.sh`, ganti:

```bash
REPO_URL="https://github.com/USERNAME/qinvi.git"
```

Lalu jalankan:

```bash
chmod +x deploy/deploy.sh
./deploy/deploy.sh
```
