require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/", productRoutes);

app.listen(process.env.PORT, () => {

  console.log(`Product Service running on port ${process.env.PORT}`);

});
