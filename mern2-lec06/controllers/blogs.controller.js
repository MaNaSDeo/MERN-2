const Blogs = require("../models/blogs.models");

/*
const {
  findAllBlogs,
  createBlogDocument,
} = require("../services/blogs.service");
*/
const BlogService = require("../services/blogs.service");
const BlogServiceInstance = new BlogService(); //Creating Object out of the BlogService class.

const createNewBlogs = async (req, res) => {
  try {
    // const result = await createBlogDocument(req.body);
    const result = await BlogServiceInstance.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllBlogs = async (req, res) => {
  try {
    // const result = await Blogs.find({});
    // const result = await findAllBlogs();
    const result = await BlogServiceInstance.find();
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

const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  // console.log("title", title);
  // console.log("author", author);
  const result = await Blogs.find({
    $or: [
      // To match with OR conditions, we use "$or : [{1st condition}, {2nd condition}]"
      { title: title }, // Blogs.find({title})
      {
        authors: {
          $elemMatch: {
            //To find inside an array we use a special operator <$elemMatch>
            email: author,
          },
        },
      },
    ],
  });
  res.json(result);
  // res.sendStatus(200);
};

module.exports = {
  createNewBlogs,
  getAllBlogs,
  deleteBlogWithId,
  updateBlogWithId,
  searchBlogs,
};
