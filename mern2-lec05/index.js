// Verb --> get, post, delete etc
require("dotenv").config();

const DB_URI = "mongodb://127.0.0.1:27017/website";
const mongoose = require("mongoose");
mongoose
  .connect(DB_URI)
  .then(() => console.log(`Connected to DB at ${DB_URI}`))
  .catch(() => console.log("Failed to connect to DB"));

const express = require("express");
const app = express();
const PORT = 8081;

const { verifyAuth } = require("./middlewares/verifAuth");

const currencyRoutes = require("./routes/currencies.routes");
const usersRoutes = require("./routes/users.route");
const blogsRoutes = require("./routes/blogs.route");

app.use(express.json()); //express.json() is a middle ware provide by express.
app.use(verifyAuth);

app.get("/", (req, res) => {
  res.send("<h1>currency Database</h1>");
});

app.use("/currencies", currencyRoutes);

app.use("/users", usersRoutes);

app.use("/blogs", blogsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
