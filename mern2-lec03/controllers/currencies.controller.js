const currencyData = require("../curriencies.json");

const password = process.env.ROUTE_PASSWORD;

const verifyAuth = (req) => {
  const { authorization } = req.headers;

  if (authorization && authorization === password) return true;
  return false;
};

const getCurrencies = (req, res) => {
  //Check password
  if (!verifyAuth(req)) {
    return res.sendStatus(403);
  }

  const { min_value } = req.query;
  if (min_value) {
    const response = currencyData.data.filter(
      (item) => Number(item.min_size) >= Number(min_value)
    );
    res.json(response);
  } else {
    res.json(currencyData.data);
  }
};

const getCurrenciesByID = (req, res) => {
  const { symbol } = req.params;
  const response = currencyData.data.filter(
    (item) => item.id === symbol.toUpperCase()
  );
  if (response) {
    res.status(200).json(response);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getCurrencies, getCurrenciesByID };
