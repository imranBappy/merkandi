const { Schema, model, Types } = require("mongoose");

const SubcategoriesScheme = Schema(
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
    category: {
      type: Types.ObjectId,
      ref: "category",
    },
    products: [
      {
        type: Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true }
);

const Subcategory = model("subcategory", SubcategoriesScheme);

module.exports = Subcategory;
