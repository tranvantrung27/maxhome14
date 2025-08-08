# Hướng dẫn Deploy MAXHOME14 Website

## Deploy lên Render

### Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Initial commit - MAXHOME14 website"
git push origin main
```

### Bước 2: Deploy trên Render
1. Truy cập [render.com](https://render.com)
2. Đăng ký/Đăng nhập tài khoản
3. Click "New +" → "Static Site"
4. Connect với GitHub repository
5. Cấu hình:
   - **Name:** maxhome14-website
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish Directory:** `frontend/dist`
   - **Environment:** Static Site

### Bước 3: Cấu hình Routes (SPA)
Thêm vào Settings → Redirects/Rewrites:
- **Source:** `/*`
- **Destination:** `/index.html`
- **Type:** Rewrite

### Bước 4: Deploy
Click "Create Static Site" và chờ build hoàn thành.

## Cấu trúc Project
```
maxhome14/
├── frontend/          # React + Vite app
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── backend/           # ASP.NET Core (sau này)
└── README.md
```

## Environment Variables (nếu cần)
- `VITE_API_URL`: URL của backend API
- `VITE_APP_NAME`: Tên ứng dụng

## Troubleshooting
- Nếu build fail, kiểm tra Node.js version (>= 16)
- Nếu route không hoạt động, kiểm tra redirect rules
- Nếu assets không load, kiểm tra base URL trong vite.config.ts
