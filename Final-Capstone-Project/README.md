# 🎯 Hobbie - Full Stack Development Capstone Project

**Author:** Akshit Gautam  
**Course:** Full Stack Development Capstone Project  
**Degree:** B.Tech Computer Science (Specialization: AI & ML)  
**Institution:** Computer Science Department

---

## 📋 Project Overview

**Hobbie** is a comprehensive full-stack web application that serves as a service-oriented platform connecting consumers and small businesses in the Arts, Entertainment, and Recreation sector. This project demonstrates end-to-end full-stack development using modern web technologies.

🌐 **Live Application:** [https://www.hobbie.ch](https://www.hobbie.ch)  
📄 **License:** © All Rights Reserved

---

## 🏗️ Architecture Overview

The application follows a **client-server architecture** with two independent, loosely coupled applications:

```
┌─────────────────────┐         ┌──────────────────────┐
│  React Frontend     │◄────►   │  Spring Boot Backend │
│  (react-frontend)   │ REST API │  (spring-backend)    │
└─────────────────────┘         └──────────────────────┘
       Port: 4200                    Port: 8080
                                    Database: MySQL
```

---

## 🛠️ Technology Stack

### Frontend

- **Framework:** React.js v17.0.2
- **Routing:** React Router v6
- **UI Library:** Semantic UI React
- **Styling:** Styled Components
- **HTTP Client:** Axios with interceptors
- **Form Validation:** Formik & Yup
- **Testing:** Jest & React Testing Library
- **Node.js:** v16.13.1+
- **npm:** v8.3.0+

### Backend

- **Framework:** Spring Boot v2.4.2
- **Language:** Java 11+
- **Build Tool:** Maven
- **API Documentation:** Swagger UI & OpenAPI 3.0
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **Email Service:** Spring Mail (SMTP)
- **Image Management:** Cloudinary
- **Containerization:** Docker & Docker Compose

---

## 📦 Core Features

### 🔐 Authentication & Authorization

- JWT-based token authentication
- Role-based access control (Users & Businesses)
- Secure endpoints protected by JWT verification
- Token refresh mechanism via axios interceptors

### 👥 User Management

- User registration & login
- Business registration & profile management
- User profile customization
- Email verification & notifications

### 🎨 Hobby Management

- Browse and discover hobbies
- Save favorite hobbies
- Business offers management
- Service listings and discovery

### 📧 Notifications

- Email notifications via Spring Mail
- User activity alerts
- Business offer updates

### 🔄 API Integration

- RESTful API design
- OpenAPI 3.0 specification
- Swagger UI for interactive documentation
- CORS enabled for cross-origin requests

---

## ⚙️ Prerequisites & Setup

### Required Software

| Component      | Version  | Purpose                       |
| -------------- | -------- | ----------------------------- |
| Java JDK       | 11.0.11+ | Backend runtime               |
| Node.js        | 16.13.1+ | Frontend runtime              |
| npm            | 8.3.0+   | Package manager               |
| Docker         | 20.10.7+ | Backend containerization      |
| Docker Compose | 1.29.0+  | Multi-container orchestration |
| MySQL          | 5.7+     | Database (runs in Docker)     |

---

## 🚀 Quick Start Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/purshink/ReactJS-Spring-Boot-Full-Stack-App.git
cd Final-Capstone-Project
```

### 2️⃣ Frontend Setup (React.js)

Navigate to the frontend directory:

```bash
cd react-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will open at: **http://localhost:4200**

### 3️⃣ Backend Setup (Spring Boot)

Navigate to the backend directory:

```bash
cd spring-backend
```

Build and run using Docker:

```bash
docker-compose up --build
```

The backend API will be available at: **http://localhost:8080**

---

## 📚 API Documentation

### Accessing the API

Once the backend is running, explore the API documentation:

- **Swagger UI:** [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)
- **OpenAPI Specification:** [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

### Key Endpoints

#### Authentication

```
POST   /signup              - Register a new consumer user
POST   /register            - Register a new business user
POST   /authenticate        - Login & receive JWT token
```

#### Protected Endpoints

All endpoints marked with 🔒 require a valid JWT token in the Authorization header.

### Authentication Flow

1. **Login/Register:** Call `/signup` or `/register` endpoint
2. **Receive Token:** Get JWT token from `/authenticate` response
3. **Include Token:** Add token to request header: `Authorization: Bearer {token}`
4. **Authorize in Swagger:** Click the 🔒 lock icon and paste your JWT token to test secured endpoints

---

## 🔧 Configuration Guide

### 📧 Email Configuration (Important!)

To enable email notifications, configure Spring Mail credentials in `spring-backend/src/main/resources/application.properties`:

```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.smtp.starttls.required=true
```

⚠️ **Note:** If mail credentials are not configured, the `/notification` endpoint will return a 500 error. However, all other application features will work normally.

### Database Configuration

The MySQL database is automatically configured via Docker Compose. Default configuration:

```properties
spring.datasource.url=jdbc:mysql://db:3306/hobbie
spring.datasource.username=root
spring.datasource.password=password
```

---

## 🧪 Testing the Application

### Frontend Testing

```bash
cd react-frontend
npm test                    # Run unit tests
npm run build              # Build for production
```

### Backend Testing

```bash
cd spring-backend
mvn test                   # Run unit tests
mvn clean package         # Build JAR package
```

---

## 📁 Project Structure

```
Final-Capstone-Project/
├── react-frontend/              # React.js Application
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API service layer
│   │   ├── hooks/             # Custom React hooks
│   │   ├── styles/            # Global styles
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
├── spring-backend/              # Spring Boot Application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── backend/
│   │   │   │       ├── controller/    # REST controllers
│   │   │   │       ├── service/       # Business logic
│   │   │   │       ├── repository/    # Data access layer
│   │   │   │       ├── entity/        # JPA entities
│   │   │   │       ├── dto/           # Data transfer objects
│   │   │   │       ├── security/      # JWT & security
│   │   │   │       └── exception/     # Exception handling
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   ├── docker-compose.yml
│   ├── Dockerfile
│   └── README.md
│
├── .git/
├── LICENSE
└── README.md               # This file
```

---

## 🔐 Security Features

- ✅ **JWT Authentication:** Secure token-based authentication
- ✅ **Password Hashing:** Bcrypt password encryption
- ✅ **CORS Protection:** Configured cross-origin resource sharing
- ✅ **Token Expiration:** Automatic token refresh mechanism
- ✅ **Secured Endpoints:** All sensitive operations require authentication
- ✅ **Role-Based Access Control:** Separate permissions for users & businesses

---

## 📋 Development Workflow

### Frontend Development

1. Make changes in `react-frontend/src/`
2. Changes auto-reload in browser (hot reload enabled)
3. Test components in browser at `http://localhost:4200`
4. Run `npm test` to execute unit tests

### Backend Development

1. Make changes in `spring-backend/src/main/java/`
2. Spring Boot auto-restarts on class changes (DevTools enabled)
3. Test endpoints via Swagger UI at port 8080
4. Run `mvn test` to execute unit tests

---

## 🐛 Troubleshooting

| Issue                         | Solution                                                      |
| ----------------------------- | ------------------------------------------------------------- |
| **Port 4200 already in use**  | Kill process: `lsof -ti:4200 \| xargs kill -9`                |
| **Port 8080 already in use**  | Kill process: `lsof -ti:8080 \| xargs kill -9`                |
| **Docker build fails**        | Run `docker system prune` to free up space                    |
| **Email notification error**  | Configure Spring Mail credentials (see Configuration section) |
| **Database connection error** | Ensure Docker is running: `docker ps`                         |
| **CORS errors in browser**    | Check backend CORS configuration in `application.properties`  |
| **JWT token invalid**         | Obtain new token via `/authenticate` endpoint                 |

---

## 📊 Performance Considerations

- **Database:** Indexes on frequently queried columns
- **Caching:** Implement Redis for session management (future enhancement)
- **API Pagination:** Implement for large datasets (future enhancement)
- **Frontend Optimization:** Code splitting & lazy loading (implemented)
- **Image Optimization:** Cloudinary integration for efficient image delivery

---

## 🚀 Deployment Notes

### Frontend Deployment

```bash
cd react-frontend
npm run build
# Deploy 'build/' folder to any static hosting (Netlify, Vercel, GitHub Pages)
```

### Backend Deployment

```bash
cd spring-backend
docker build -t hobbie-backend .
# Push to Docker registry and deploy to cloud platform
# Supported platforms: AWS ECS, Google Cloud Run, Azure Container Instances, DigitalOcean
```

---

## 📞 Support & Contributions

**Author:** Akshit Gautam  
**Project:** Full Stack Development Capstone Project  
**Status:** Active Development

For questions or issues:

1. Check API documentation at Swagger UI
2. Review error messages in console/logs
3. Consult project README files in respective directories

---

## 📜 License

This project is subject to Copyright. All Rights Reserved.  
© 2024 Akshit Gautam - Full Stack Development Capstone Project

---

## 📝 Version History

| Version | Date       | Changes                             |
| ------- | ---------- | ----------------------------------- |
| 1.0.0   | 2024-11-13 | Initial capstone project submission |

---

**Last Updated:** November 13, 2024  
**Status:** ✅ Production Ready
