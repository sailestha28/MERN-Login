const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://sailestha2018:sailestha2018@shresthacluster.wqvd6fx.mongodb.net/?retryWrites=true&w=majority&appName=shresthaCluster";

mongoose.connect(DB).then(() => {
  console.log("connetcion succefull");
});

const middleware = (req, res, next) => {
  console.log("my middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world from server`);
});

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

app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});

