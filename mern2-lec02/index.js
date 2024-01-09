// req.params => An object containing properties mapped to the named route "parameters"
const express = require("express");
const app = express();
const PORT = 8082;
// const currencyData = require("./curriencies.json");

const {
  getCurrencies,
  getCurrenciesByID,
} = require("./controllers/currencies.controller");

const {
  getAllUsers,
  filterUsers,
  getUserById,
} = require("./controllers/users.controllers");

app.get("/", (req, res) => {
  res.send("<h1>currency Database</h1>");
});

app.get("/currencies", getCurrencies);

// app.get("/currencies", (req, res) => {
//   res.json(currencyData.data);
// });

app.get("/currencies/:symbol", getCurrenciesByID);

app.get("/users", getAllUsers);

app.get("/users/search", filterUsers);

app.get("/users/:id", getUserById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
