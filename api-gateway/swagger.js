const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce Microservices API",
      version: "1.0.0",
      description: "Microservices API Gateway Documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: [], // we define routes manually below
};

const swaggerSpec = swaggerJsdoc(options);

swaggerSpec.paths = {
  "/auth/register": {
    post: {
      summary: "Register User",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "User registered",
        },
      },
    },
  },

  "/auth/login": {
    post: {
      summary: "Login User",
      responses: {
        200: {
          description: "Returns JWT token",
        },
      },
    },
  },

  "/products": {
    get: {
      summary: "Get all products",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "List of products",
        },
      },
    },

    post: {
      summary: "Create product",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Product created",
        },
      },
    },
  },

  "/products/{id}": {
    delete: {
      summary: "Delete product (ADMIN only)",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Product deleted",
        },
      },
    },
  },
};

swaggerSpec.components = {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};

module.exports = swaggerSpec;
