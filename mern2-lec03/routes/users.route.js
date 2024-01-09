const router = require("express").Router();

const {
  getAllUsers,
  filterUsers,
  getUserById,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);

router.get("/search", filterUsers);

router.get("/:id", getUserById);

module.exports = router;
