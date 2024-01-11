const { Schema, model } = require("mongoose");

const storeModel = new Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
    },
    postalCode: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: "country",
      required: [true, "Country is required!"],
    },
    vatId: {
      type: String,
      required: true,
      trim: true,
    },
    about: {
      type: String,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: [true, "User is required!"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Phone is required!"],
    },
    default: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "billing ",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("store", storeModel);
