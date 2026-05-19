#!/usr/bin/env bash
set -e

APP_DIR="/var/www/qinvi"
REPO_URL="https://github.com/USERNAME/qinvi.git"

echo "Deploy qinvi landing page..."

if [ ! -d "$APP_DIR/.git" ]; then
  sudo mkdir -p "$APP_DIR"
  sudo chown -R "$USER":"$USER" "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"
git pull origin main

npm ci
npm run build

sudo systemctl reload nginx

echo "Deploy selesai."
