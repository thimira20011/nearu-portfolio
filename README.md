# 🚀 NearU: Local Business Marketplace for University Area

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![AWS](https://img.shields.io/badge/AWS-Cloud%20Deployed-orange.svg)]()

NearU is a comprehensive web platform and mobile application prototype designed to serve as the central digital marketplace connecting students and community members with essential local businesses in the university area. It facilitates seamless discovery, booking, ordering, and reviewing of local services.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Monetization](#-monetization)
- [Contributing](#-contributing)
- [Team](#-team)
- [License](#-license)

## 💡 Project Overview

The primary objective of NearU is to solve the critical local community problem of fragmented and hard-to-find university-area services (e.g., food vendors, taxi services, cake makers). The platform provides a single, verified location for discovery and direct interaction, while incorporating robust safety and monetization features.

## ✨ Features

### For Users
- **Discovery & Search**: Browse businesses by category and location
- **Direct Interaction**: Contact functionality to place orders and make bookings
- **Social Proof**: Add detailed reviews and star ratings to services
- **Bulk Orders**: Unique feature allowing students to submit bulk inquiries to multiple verified contacts simultaneously

### For Businesses
- **Profile Management**: Comprehensive business registration, profile updates, and service listing management
- **Content Management**: Upload photos, menus, service details, and pricing
- **Analytics Dashboard**: Access views, ratings, and sales overview
- **Monetization Management**: Control premium features and listing boosts

### Safety & Moderation
- **Admin Approval**: All new business registrations require admin approval before going live
- **Service Removal**: Admin can remove services with excessive negative reviews or poor ratings
- **Transparency**: Mandatory disclaimer banner stating platform limitations and responsibilities

## ⚙️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Backend API** | ASP.NET Core Web API (C#) | Core business logic and RESTful API endpoints |
| **Database** | Amazon RDS (SQL Server) | Highly available and scalable relational data storage |
| **Frontend** | React.js / Angular | Modern, responsive single-page application (SPA) |
| **Styling** | TailwindCSS | Utility-first CSS framework for rapid UI development |
| **Authentication** | ASP.NET Identity + JWT | Secure user and business authentication |
| **Design** | Figma | UI/UX diagrams and mockups |

## ☁️ Architecture

### AWS Cloud Infrastructure

Our infrastructure leverages AWS services for high availability, scalability, and automation:

- **Compute**: Elastic Beanstalk (or EC2 + Docker) with Application Load Balancer (ALB)
- **Data & Storage**: Amazon RDS for database, Amazon S3 for file assets
- **Serverless**: AWS Lambda for image processing and scheduled maintenance
- **Notifications**: Amazon SES and SNS for email and push/SMS notifications

### CI/CD Pipeline

The project follows Scrum Agile methodology with a professional CI/CD pipeline:

1. **Source**: Version controlled on GitHub
2. **Continuous Integration**: AWS CodeBuild runs xUnit/NUnit tests on every push
3. **Continuous Deployment**: AWS CodePipeline automatically deploys to Elastic Beanstalk

## 🚀 Getting Started

### Prerequisites

- .NET Core 6.0 or later
- Node.js 16.0 or later
- SQL Server or Amazon RDS instance
- AWS Account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nearu.git
   cd nearu
   ```

2. **Backend Setup**
   ```bash
   cd backend
   dotnet restore
   dotnet build
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Database Setup**
   ```bash
   dotnet ef database update
   ```

5. **Environment Variables**
   Create `.env` files with necessary configuration:
   ```
   DATABASE_CONNECTION_STRING=your_connection_string
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY=your_aws_key
   AWS_SECRET_KEY=your_aws_secret
   ```

## 🚀 Deployment

The application is deployed on AWS using:
- **Elastic Beanstalk** for application hosting
- **RDS** for database management
- **S3** for static file storage
- **CloudFront** for CDN (optional)

Deploy using AWS CodePipeline or manually:
```bash
dotnet publish -c Release
# Deploy to Elastic Beanstalk
```

## 💰 Monetization Strategy

Revenue generation through three flexible tiers:

1. **Premium Listings**: Boosted visibility and featured placement in search results
2. **Premium Features**: Subscription access to advanced tools and analytics
3. **Ad Placement**: Revenue through standard ad networks (e.g., AdSense)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Team

This capstone project was developed by:

| Role | Name |
|------|------|
| Backend / Database Engineer | Thimira Niranjaya |
| Frontend Lead / UI/UX | Manjari Bhagya |
| CI/CD & Cloud Specialist | Pamal Pahasara |
| Full Stack Developer / Tester | Uvindu Heshan |
| **Project Supervisor** | **Mr. S. Nishankar** |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Note**: This repository is part of an academic capstone submission.

⭐ **Star this repo if you find it helpful!**