const mongoose = require("mongoose");
const express = require("express");
const app = express();

// const DB =
//   "mongodb+srv://sailestha2018:sailestha@2580@cluster.omblret.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

// const db =
//   "mongodb+srv://sailestha2018:sailestha@2580@cluster.omblret.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

// mongoose.connect(db);

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

