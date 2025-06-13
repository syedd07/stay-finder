# 🏠 StayFinder - Airbnb Clone

A full-stack vacation rental platform built with Next.js, featuring property listings, booking management, user authentication, and host dashboards.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://findbnb.vercel.app/)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Database](https://img.shields.io/badge/Database-Neon%20PostgreSQL-green?style=for-the-badge&logo=postgresql)](https://neon.tech/)

## 🌟 Features

### 🏡 **Property Management**
- Browse and search vacation rentals
- Detailed property listings with high-quality images
- Property categories (Beach, Mountain, City, etc.)
- Advanced search and filtering capabilities
- Interactive property cards with ratings and pricing

### 👤 **User Authentication**
- Secure user registration and login
- Demo account for testing (`demo@stayfinder.com` / `password`)
- Protected routes and user sessions
- Profile management

### 📅 **Booking System**
- Interactive date picker for check-in/check-out
- Real-time availability checking
- Booking confirmation and management
- User booking history

### 🏠 **Host Dashboard**
- Property management for hosts
- Booking analytics and statistics
- Revenue tracking
- Guest management
- Host onboarding flow

### 💬 **Reviews & Ratings**
- Property review system
- Star ratings and detailed feedback
- Review moderation
- Average rating calculations

### 📱 **Responsive Design**
- Mobile-first responsive design
- Touch-friendly interfaces
- Optimized for all screen sizes
- Progressive Web App features

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icons

### **Backend**
- **Next.js Server Actions** - Server-side logic
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **SQL** - Direct database queries

### **Authentication**
- **Custom Auth System** - Secure user authentication
- **Session Management** - User session handling

### **Deployment**
- **Vercel** - Hosting and deployment
- **GitHub** - Version control and CI/CD

## 🚀 Live Demo

**[View Live Application](https://findbnb.vercel.app/)**

### Demo Credentials
- **Email**: `demo@stayfinder.com`
- **Password**: `password`

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**
- **Neon Database Account** (for database setup)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/syedd07/stay-finder.git
cd stay-finder
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Database Configuration
DATABASE_URL="your-neon-database-url"
POSTGRES_URL="your-postgres-url"
POSTGRES_PRISMA_URL="your-prisma-url"
POSTGRES_URL_NON_POOLING="your-non-pooling-url"

# Add other environment variables as needed
```

### 4. Database Setup
Run the database creation and seeding scripts:
```bash
# Create database tables
npm run db:create

# Seed with sample data
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
stay-finder/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── bookings/          # Booking management
│   ├── host/              # Host dashboard
│   ├── listings/          # Property listings
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   └── property-card.tsx # Property display card
├── lib/                  # Utility functions
│   ├── actions.ts        # Server actions
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── scripts/              # Database scripts
│   ├── create-database.sql
│   └── seed-data.sql
└── public/               # Static assets
```

## 🗄️ Database Schema

### **Users Table**
- User authentication and profile information
- Roles (guest, host, admin)
- Profile details and preferences

### **Properties Table**
- Property listings and details
- Location, pricing, and amenities
- Host information and availability

### **Bookings Table**
- Booking records and status
- Check-in/check-out dates
- Guest and property relationships

### **Reviews Table**
- Property reviews and ratings
- User feedback and comments
- Rating calculations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:create    # Create database tables
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database (drop and recreate)

# Deployment
npm run deploy       # Deploy to Vercel
```

## 🌐 API Routes

### **Authentication**
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### **Properties**
- `GET /api/properties` - Get all properties
- `GET /api/properties/[id]` - Get property by ID
- `POST /api/properties` - Create new property (hosts only)

### **Bookings**
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/[id]` - Update booking status

## 🎨 UI/UX Features

### **Design System**
- Consistent color palette and typography
- Accessible design with ARIA labels
- Smooth animations and transitions
- Loading states and error handling

### **User Experience**
- Intuitive navigation and search
- Smart form interactions
- Real-time feedback and notifications
- Mobile-optimized touch interactions

## 🔒 Security Features

- **Input Validation** - Server-side validation for all inputs
- **SQL Injection Prevention** - Parameterized queries
- **Authentication** - Secure user sessions
- **CORS Protection** - Cross-origin request security

## 📱 Mobile Optimization

- **Responsive Design** - Works on all screen sizes
- **Touch Gestures** - Mobile-friendly interactions
- **Performance** - Optimized for mobile networks
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Deployment

### **Vercel Deployment**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### **Manual Deployment**
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Syed Yousuf Ali** - [@syedd07](https://github.com/syedd07)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **shadcn/ui** - For the beautiful UI components
- **Neon** - For the serverless PostgreSQL database
- **Unsplash** - For high-quality property images

## 📞 Support

For support, email syedyusufali6626@gmail.com or create an issue on GitHub.

---

**Built with ❤️ using Next.js and deployed on Vercel**
