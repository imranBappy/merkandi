const { Schema, model } = require("mongoose");

const pageSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required!"],
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: [true, "Content is required!"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Page = model("page", pageSchema);
module.exports = Page;
