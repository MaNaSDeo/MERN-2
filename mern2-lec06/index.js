// MVCS architecture --> Model Views Controllers Service
// __v is version of the document that we are trying to store in database.
/**
 * We start with Client/Browser
 * It sends an HTTP Request; it has request.params, request.query, headers, body
 * It sends an HTTP Request; it has request.params, request.query, headers, body
 * When the route matches it goes to the respective middleware. The middleware does some work, and sends the response back to Client/Browser, saying “The request is not authorised” or “request is not valid”. And if the request passes, it sends the request to the next middleware.
 * Controllers decide what needs to be done, based on that it calls respective “Service”, e.g. Authorisation service, payment service, user service, blogs service etc.
 * Service knows how to execute a task and then it calls a database.
 * Model:- Service calls a model to interact with the database, e.g. Mongoose. Model knows how to interact with the database.
 * Database -> Model -> service -> controllers -> Client/Browser
 */

require("dotenv").config();

const DB_URI = "mongodb://127.0.0.1:27017/website";
const mongoose = require("mongoose");
mongoose
  .connect(DB_URI)
  .then(() => console.log(`Connected to DB at ${DB_URI}`))
  .catch(() => console.log("Failed to connect to DB"));

const express = require("express");
const app = express();
const PORT = 8082;

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
