const { Schema, model, Types } = require("mongoose");

const categoryScheme = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require!"],
      min: 2,
      max: 30,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: Types.ObjectId,
      ref: "image",
    },
    subcategory: [
      {
        type: Types.ObjectId,
        ref: "subcategory",
      },
    ],
    products: [
      {
        type: Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true }
);

const Category = model("category", categoryScheme);

module.exports = Category;
