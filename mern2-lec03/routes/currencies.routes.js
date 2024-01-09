const router = require("express").Router();

const {
  getCurrencies,
  getCurrenciesByID,
} = require("../controllers/currencies.controller");

router.get("/", getCurrencies);

router.get("/:symbol", getCurrenciesByID);

module.exports = router;
