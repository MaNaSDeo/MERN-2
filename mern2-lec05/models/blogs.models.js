const mongoose = require("mongoose");

//Create the schema form blogs

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    authors: [String],
    // authors: {
    //   type: [String]
    // }, //It is same as "authors: [String]"
    content: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true } //will add createdAt and updatedAt timestamps
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
