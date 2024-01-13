const Blogs = require("../models/blogs.models");

/*
const findAllBlogs = async () => {
  // This is not a controller, so it will take nothing(request, response).
  const result = await Blogs.find({});
  return result;
};

const createBlogDocument = async (data) => {
  const newBlogDocument = new Blogs(data);
  const result = await newBlogDocument.save();
  return result;
};

module.exports = { findAllBlogs, createBlogDocument };
*/

class BlogService {
  /*
  save = async (doc) => {
    await doc.save();
  };
  */
  create = async (data) => {
    const newBlogDocument = new Blogs(data);
    const result = await newBlogDocument.save();
    return result;
  };
  find = async () => {
    const result = await Blogs.find({});
    return result;
  };
}

module.exports = BlogService;
