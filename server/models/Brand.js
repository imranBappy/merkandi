const { Schema, model, Types } = require("mongoose");

const brandScheme = Schema(
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
    logo: {
      type: Types.ObjectId,
      ref: "image",
    },
    banner: {
      type: Types.ObjectId,
      ref: "image",
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

const Brand = model("brand", brandScheme);

module.exports = Brand;
