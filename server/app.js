const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send(`hello world from server app.js`);
// });

app.get("/about", middleware, (req, res) => {
  res.send(`hello world from about`);
});

app.get("/contact", (req, res) => {
  res.send(`hello world from contact`);
});
app.get("/signin", (req, res) => {
  res.send(`hello world from sign`);
});
app.get("/signup", (req, res) => {
  res.send(`hello registration world from signup`);
});

app.listen(PORT, () => {
  console.log(`server is running at port 3000`);
});

