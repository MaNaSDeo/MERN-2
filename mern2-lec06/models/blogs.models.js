const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      maxLength: 25,
    },
    twitterHandle: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (value) => {
        // validate is reserved word for mongoose to validate something.
        return validator.isEmail(value); //It will return true or false.
      },
    },
    image: {
      type: String,
      validate: (value) => {
        return validator.isURL(value);
      },
    },
  },
  {
    _id: false,
  }
);
//This creates the schema form blogs
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    authors: {
      type: [authorSchema], //To find inside an array we use a special operator <$elemMatch>
    }, //It is same as "authors: [authorSchema]"
    content: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, //will add createdAt and updatedAt timestamps
    // _id: false, // => It will throw an error, as top level document always needs "_id".
  }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
