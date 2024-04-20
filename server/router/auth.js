const express = require("express");

const router = express.Router();

require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from server router js`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "all field should be entered" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exits" });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmPassword,
    });

    await user.save();
    res.status(201).json({ message: "User register successful" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

