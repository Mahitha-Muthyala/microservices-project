const express = require("express");

const Product = require("../models/Product");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");


const router = express.Router();


// CREATE PRODUCT
router.post("/", authMiddleware, async (req, res) => {

  try {

    const product = await Product.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(product);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});


// GET ALL PRODUCTS
router.get("/", async (req, res) => {

  const products = await Product.find();

  res.json(products);

});


// UPDATE PRODUCT
router.put("/:id", authMiddleware, async (req, res) => {

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);

});


// DELETE PRODUCT
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {

  await Product.findByIdAndDelete(req.params.id);

  res.json({ message: "Product deleted by ADMIN" });

});



module.exports = router;
