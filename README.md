## Microservices Architecture with API Gateway, Auth Service, and Product Service

### Overview

This project is a production-ready Microservices architecture built using Node.js, Express, MongoDB, JWT Authentication, and Docker. It consists of multiple independent services communicating through an API Gateway.

The system provides secure user authentication and product management with proper authorization and containerized deployment.
---

### Tech Stack

- Node.js

- Express.js

- MongoDB

- Mongoose

- JWT Authentication

- Docker

- Docker Compose

- Swagger (API Documentation)

- Thunder Client / Postman (Testing)

### Services
### 1. API Gateway

Acts as a single entry point for all client requests.

Responsibilities:

- Routes requests to appropriate services

- Centralized access point

- Swagger Documentation

Port: 5000
---
### 2.Auth Service

Handles user authentication and authorization.

Features:

- User registration

- User login

- JWT token generation

- Password hashing

- Role-based access (ADMIN / USER)

Port: 5001
---

### 3. Product Service

Handles product management.

Features:

- Create product (Protected)

- Get all products (Public)

- Update product (Protected)

- Delete product (Protected)

- Tracks product creator

Port: 5002
---

### 4. MongoDB

Database for storing:

- Users

- Products

Port: 27017
---
### Installation and Setup
#### Prerequisites

- Node.js installed

- Docker installed

- Docker Desktop running

### Running the Project
#### Run using Docker (Recommended)

From the root folder:
docker-compose up --build

This will start:

- MongoDB

- Auth Service

- Product Service

- API Gateway

### Service URLs
Service	               URL
---
API Gateway  	 http://localhost:5000

Auth Service	 http://localhost:5001

Product Service	 http://localhost:5002

Swagger Docs	 http://localhost:5000/docs
---

### API Endpoints
#### Authentication
##### Register User
POST /auth/register

Body:
{
  "name": "Mahitha",
  "email": "mahitha@gmail.com",
  "password": "123456",
  "role": "ADMIN"
}
---

##### Login User
POST /auth/login

Body:
{
  "email": "mahitha@gmail.com",
  "password": "123456"
}

Response:
{
  "token": "JWT_TOKEN"
}
---

### Products

#### Create Product (Protected)
POST /products

Headers:
Authorization: Bearer JWT_TOKEN

Body:
{
  "name": "iPhone 15",
  "price": 80000
}
---

### Get All Products (Public)
GET /products

### Update Product (Protected)
PUT /products/:id

Headers:
Authorization: Bearer JWT_TOKEN

### Delete Product (Protected)
DELETE /products/:id

Headers:
Authorization: Bearer JWT_TOKEN
---

### Authentication and Authorization

This project uses JWT (JSON Web Token) for authentication.

Protected routes require:

Authorization: Bearer JWT_TOKEN


Role-based access control is implemented:

- ADMIN → Full access

- USER → Limited access

### Swagger Documentation

Swagger UI is available at:

http://localhost:5000/docs


Features:

- View all endpoints

- Test APIs directly

- View request and response schemas

### Docker Support

Docker is used to containerize all services.

Services included:

- MongoDB container

- Auth Service container

- Product Service container

- API Gateway container

Run with:

docker-compose up --build
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

### How the System Works

1. Client sends request to API Gateway

2. API Gateway forwards request to Auth Service or Product Service

3. Auth Service validates user and generates JWT

4. Product Service verifies JWT before allowing protected operations

5. MongoDB stores users and products

### Author

Mahitha Muthyala
B.Tech Electronics and Communication Engineering
---
