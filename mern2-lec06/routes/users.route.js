const router = require("express").Router();

const {
  getAllUsers,
  filterUsers,
  getUserById,
} = require("../controllers/users.controller");

const { validateSearchQuery } = require("../middlewares/validateSearchQuery");

router.get("/", getAllUsers);

router.get("/search", validateSearchQuery, filterUsers);

router.get("/:id", getUserById);

module.exports = router;
