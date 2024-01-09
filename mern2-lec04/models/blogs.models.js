const mongoose = require("mongoose");

//Create the schema form blogs

const blogSchema = new mongoose.Schema({
  title: String, //Title is string
  authors: [String], //Authors is an array of strings
  content: String, //Content is string
  publishedAt: Date, //publishedAt is Date
});

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
