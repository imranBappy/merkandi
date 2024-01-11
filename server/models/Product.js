const { Schema, model } = require("mongoose");
const Category = require("./Category");
const Subcategory = require("./Subcategories");
const Brand = require("./Brand");
const sendProductToAlgolia = require("../utils/sendProductToAlgolia");
const Image = require("./Image");

const productSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      minlength: [2, "Title should have at least 2 characters"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
      min: [0, "Price should be a positive number"],
    },
    salePrice: {
      type: Number,
      min: [0, "Sale price should be a positive number"],
    },
    minimalOrder: {
      type: Number,
      min: [1, "Minimal order should be at least 1"],
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "image",
      required: [true, "Image is required!"],
    },
    gallery: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "image",
        },
      ],
      default: [],
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    subcategory: [
      {
        type: Schema.Types.ObjectId,
        ref: "subcategory",
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: [true, "User is required!"],
    },
    negotiable: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    tags: [String],
    wholesale: {
      type: Boolean,
      default: false,
    },
    wholesalePrices: [
      {
        price: { type: Number },
        quantity: { type: Number },
        to: { type: Number },
      },
    ],
    country: [
      {
        type: Schema.Types.ObjectId,
        ref: "country",
      },
    ],
    label: {
      type: String,
      default: "new",
    },
    unit: {
      type: String,
    },
    productGroup: {
      type: Schema.Types.ObjectId,
      ref: "productGroup",
    },
    acceptPayments: {
      type: [String],
      default: [],
      enum: ["stripe", "paypal", "manual"],
    },
    deliveryOptions: {
      type: [String],
      default: [],
    },
    stock: {
      type: Number,
      default: 0,
    },
    sold: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    tags: "text",
    description: "text",
  },
  {
    weights: {
      title: 5,
      tags: 5,
      description: 3,
    },
  }
);
productSchema.post("save", async function () {
  const product = this;
  const category = await Category.findById(product.category, {
    select: "name description",
  });
  const subcategories = await Subcategory.findById(product.subcategory, {
    select: "name description",
  });
  const brand = await Brand.findById(product.brand, {
    select: "name description",
  });
  const image = await Image.findById(product.image);
  const updateProduct = {
    ...product._doc,
    category,
    ...(subcategories && { subcategories }),
    brand,
    image,
  };

  await sendProductToAlgolia(updateProduct);
});

const Product = model("product", productSchema);
module.exports = Product;
