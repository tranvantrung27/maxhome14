# MAXHOME14 Website

Website chính thức của MAXHOME14 - Xây nhà trọn gói
## Cấu trúc dự án

```
maxhome14/
├── frontend/                 # React + Vite Frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main App component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
└── backend/                 # ASP.NET Core Backend (sẽ tạo sau)
```

## Công nghệ sử dụng

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS Variables** - Theme system

### Backend (sẽ tạo)
- **ASP.NET Core** - Web API
- **Entity Framework** - ORM
- **SQL Server** - Database
- **WordPress Integration** - CMS

## Màu sắc chủ đạo

- **Trắng**: `#ffffff` - Background chính
- **Vàng**: `#ffd700` - Màu chủ đạo
- **Vàng phụ**: `#ffed4e` - Màu accent
- **Vàng đậm**: `#b8860b` - Màu hover

## Cài đặt và chạy

### Frontend

1. Cài đặt dependencies:
```bash
cd frontend
npm install
```

2. Chạy development server:
```bash
npm run dev
```

3. Build production:
```bash
npm run build
```

### Backend (sẽ tạo sau)

## API Endpoints

Base URL: `https://api.maxhome14.vn`

### Contact
- `POST /contact` - Gửi form liên hệ

### Properties
- `GET /properties` - Lấy danh sách bất động sản
- `GET /properties/:id` - Lấy chi tiết bất động sản

## Cấu trúc file

### Components
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer component

### Pages
- `Home.tsx` - Trang chủ
- `About.tsx` - Trang giới thiệu
- `Contact.tsx` - Trang liên hệ

### Services
- `api.ts` - API client và services

### Types
- `index.ts` - TypeScript interfaces

### Utils
- `constants.ts` - Constants và configuration
- `helpers.ts` - Utility functions

## Development

### Code Style
- Sử dụng TypeScript strict mode
- ESLint cho code linting
- Prettier cho code formatting

### Folder Structure
- Mỗi component có file CSS riêng
- Tách biệt logic và UI
- Sử dụng custom hooks cho state management

### API Integration
- Axios interceptors cho authentication
- Error handling tập trung
- Type-safe API calls

## Deployment

### Frontend
- Build với Vite
- Deploy lên CDN/Static hosting

### Backend
- Deploy lên Azure/AWS
- Database migration
- Environment configuration

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

© 2024 MAXHOME14. All rights reserved.
