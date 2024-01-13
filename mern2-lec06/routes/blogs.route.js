const router = require("express").Router();

const {
  createNewBlogs,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
} = require("../controllers/blogs.controller");

router.post("/new", createNewBlogs);
router.get("/", getAllBlogs);
router.get("/search", searchBlogs);
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogWithId);

module.exports = router;
