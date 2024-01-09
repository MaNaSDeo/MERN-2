// Controller --> Is a function which is exceuted when the route matches. It take request & response as parameter.
// Middleware --> It is like a relay(relay race) function, which passes different functions or middleware. Is also a function, which takes request & response and after execution it pass request to next function or middleware.
// Routes passes the request to 'middleware'. If access is denied it respond to the client directly saying access denied. If access is accepted it passes the request to controllers or next function.

require("dotenv").config();

const DB_URI = "mongodb://127.0.0.1:27017";
const mongoose = require("mongoose");
mongoose
  .connect(DB_URI)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Failed to connect to DB"));

const express = require("express");
const app = express();
const PORT = 8081;

const { verifyAuth } = require("./middlewares/verifAuth");

const currencyRoutes = require("./routes/currencies.routes");
const usersRoutes = require("./routes/users.route");

app.use(verifyAuth);

app.get("/", (req, res) => {
  res.send("<h1>currency Database</h1>");
});

app.use("/currencies", currencyRoutes);

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
