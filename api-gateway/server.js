require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");


const express = require("express");
const cors = require("cors");

const { createProxyMiddleware } = require("http-proxy-middleware");

const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(cors());


// AUTH SERVICE
app.use(
  "/auth",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    changeOrigin: true,
    pathRewrite: {
      "^/auth": ""
    }
  })
);


// PRODUCT SERVICE
app.use(
  "/products",
  authMiddleware,
  createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE,
    changeOrigin: true,
    router: () => process.env.PRODUCT_SERVICE,
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.path = req.originalUrl;
    }
  })
);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});
