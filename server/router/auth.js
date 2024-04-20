const express = require("express");

const router = express.Router();

require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`hello world from server router js`);
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "all field should be entered" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
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

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "User register successful" });
        })
        .catch((err) => {
          err.status(500).json({ message: "Failed to registered" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

