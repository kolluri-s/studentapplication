const express = require("express");
const Student = require("../models/students");
const router = new express.Router();
const bcrypt = require("bcrypt");




router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new Student({ name, email, password:hashedpassword, phone, address});
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({ email: email });
    if (!user) {
      return res.status(401).send({ success: false, message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.send({ success: true, message: "Login successful" });
    } else {
      return res.status(401).send({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ success: false, message: "Server error during login" });
  }
});


router.get("/getstudent/:phone", async (req, res) => {
  try {
    const phone = req.params.phone;
    const getData = await Student.findOne({ phone: phone });

    if (getData) {
      res.send(getData);
    } else {
      res.status(404).send({ message: "Student not found." });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;