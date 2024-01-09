const Blogs = require("../models/blogs.models");

const createNewBlogs = async (req, res) => {
  //   console.log(req.body);

  const newBlogDocument = new Blogs(req.body);
  //   console.log(newBlogDocument);

  try {
    const result = await newBlogDocument.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const result = await Blogs.find({});
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blogs.findOneAndDelete({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBlogWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const update = req.body;
    const result = await Blogs.findOneAndUpdate(filter, update, { new: true }); //{ new: true } is ++i, else it is like i++
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createNewBlogs,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
};
