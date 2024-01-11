const { Schema, model } = require("mongoose");

const clickSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["order", "message", "phone", "add"],
    },
    customare: {
      type: Schema.Types.ObjectId,
      ref: "auth",
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("click", clickSchema);
