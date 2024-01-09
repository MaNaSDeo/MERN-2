// req.params => An object containing properties mapped to the named route "parameters"
const express = require("express");
const app = express();
const PORT = 8082;
const currencyData = require("./currencies.json");

app.get("/", (req, res) => {
  res.send("<h1>currency Database</h1>");
});

app.get("/currencies", (req, res) => {
  const { min_value } = req.query;
  //   console.log(min_value);
  const response = currencyData.data.filter(
    (item) => Number(item.min_size) >= Number(min_value)
  );
  if (min_value) {
    res.json(response);
  } else {
    res.json(currencyData.data);
  }
});

app.get("/currencies", (req, res) => {
  res.json(currencyData.data);
});

app.get("/currencies/:symbol", (req, res) => {
  const { symbol } = req.params;
  const response = currencyData.data.filter(
    (item) => item.id === symbol.toUpperCase()
  );
  if (response) {
    res.status(200).json(response);
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
