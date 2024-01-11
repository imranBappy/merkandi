const { Schema, model, Types } = require("mongoose");

const productGroupScheme = Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
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

const ProductGroup = model("productGroup", productGroupScheme);

module.exports = ProductGroup;
