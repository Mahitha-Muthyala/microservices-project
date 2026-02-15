# Microservices Architecture with API Gateway, Auth Service, and Product Service

---

## Overview

This project is a production-ready **Microservices Architecture** built using **Node.js, Express, MongoDB, JWT Authentication, and Docker**.

It consists of multiple independent services communicating through an **API Gateway**.

The system provides:

- Secure user authentication
- Role-based authorization
- Product management
- Docker containerized deployment
- Swagger API documentation

---

## Architecture

Client
│
▼
API Gateway (Port 5000)
│
├── Auth Service (Port 5001)
│ └── User Authentication & JWT
│
├── Product Service (Port 5002)
│ └── Product Management
│
└── MongoDB (Port 27017)


---


---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Docker
- Docker Compose
- Swagger (API Documentation)
- Thunder Client / Postman

---

## Services

### 1. API Gateway

Acts as a single entry point for all client requests.

**Responsibilities:**

- Routes requests to appropriate services
- Centralized access point
- Swagger Documentation

**Port:** `5000`

---

### 2. Auth Service

Handles user authentication and authorization.

**Features:**

- User Registration
- User Login
- JWT Token Generation
- Password Hashing
- Role-Based Access Control (ADMIN / USER)

**Port:** `5001`

---

### 3. Product Service

Handles product management.

**Features:**

- Create Product (Protected)
- Get All Products (Public)
- Update Product (Protected)
- Delete Product (Protected)
- Tracks product creator

**Port:** `5002`

---

### 4. MongoDB

Database used for storing:

- Users
- Products

**Port:** `27017`

---

## Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- Docker
- Docker Desktop

---

## Running the Project

### Run using Docker

Open terminal in root folder and run:

```bash
docker-compose up --build
```

This will start:

- MongoDB

- Auth Service

- Product Service

- API Gateway

--- 

## Service URLs

Service	               URL

API Gateway  	 http://localhost:5000

Auth Service	 http://localhost:5001

Product Service	 http://localhost:5002

Swagger Docs	 http://localhost:5000/docs
---

### API Endpoints
**Authentication**
**Register User**
```bash
POST /auth/register
```

Body:
```bash
{
  "name": "Mahitha",
  "email": "mahitha@gmail.com",
  "password": "123456",
  "role": "ADMIN"
}
```
---

**Login User**
```bash
POST /auth/login
```

Body:
```bash
{
  "email": "mahitha@gmail.com",
  "password": "123456"
}
```

Response:
```bash
{
  "token": "JWT_TOKEN"
}
```
---

### Products

**Create Product (Protected)**
```bash
POST /products
```
Headers:
```bash
Authorization: Bearer JWT_TOKEN
```
```bash
Body:
{
  "name": "iPhone 15",
  "price": 80000
}
```
---

### Get All Products (Public)
```bash
GET /products
```

### Update Product (Protected)
```bash
PUT /products/:id
```

Headers:
```bash
Authorization: Bearer JWT_TOKEN
```

### Delete Product (Protected)
```bash
DELETE /products/:id
```

Headers:
```bash
Authorization: Bearer JWT_TOKEN
```

---

### Authentication and Authorization

This project uses JWT (JSON Web Token) for authentication.

Protected routes require:
```bash
Authorization: Bearer JWT_TOKEN
```


Role-based access control is implemented:

- ADMIN → Full access

- USER → Limited access
---

### Swagger Documentation

Swagger UI is available at:
```bash
http://localhost:5000/docs
```

Features:

- View all endpoints

- Test APIs directly

- View request and response schemas
---

### Docker Support

Docker is used to containerize all services.

Services included:

- MongoDB container

- Auth Service container

- Product Service container

- API Gateway container

Run with:
```bash

docker-compose up --build
```
---

### Key Features

- Microservices Architecture

- API Gateway Pattern

- JWT Authentication

- Role-Based Authorization

- MongoDB Integration

- Docker Containerization

- Swagger API Documentation

- Secure Protected Routes

- Scalable and Modular Design
---

### How the System Works

1. Client sends request to API Gateway

2. API Gateway forwards request to Auth Service or Product Service

3. Auth Service validates user and generates JWT

4. Product Service verifies JWT before allowing protected operations

5. MongoDB stores users and products
---

### Author

Mahitha Muthyala
B.Tech Electronics and Communication Engineering
---
