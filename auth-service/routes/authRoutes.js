const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {

  const { name, email, password } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});


// LOGIN
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(400).json({ message: "Invalid password" });


  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });

});


// VALIDATE TOKEN
router.get("/validate-token", async (req, res) => {

  const token = req.headers.authorization?.split(" ")[1];

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json(decoded);

  } catch {

    res.status(401).json({ message: "Invalid token" });

  }

});


module.exports = router;
