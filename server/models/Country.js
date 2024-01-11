// model for country
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    shortName: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    currency: {
      type: String,
      required: true,
      unique: true,
    },
    currencySymbol: {
      type: String,
      required: true,
      unique: true,
    },
    flag: {
      type: Schema.Types.ObjectId,
      ref: "image",
      required: true,
    },
    state: [
      {
        type: Schema.Types.ObjectId,
        ref: "state",
      },
    ],
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("country", CountrySchema);
