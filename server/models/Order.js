const { Schema, model } = require("mongoose");

const orderModal = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: [true, "User is required!"],
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "store",
      required: [true, "Store is required!"],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: [true, "Product is required!"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required!"],
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: [true, "Owner is required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("order", orderModal);
