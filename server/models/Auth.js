const { Schema, model, Types } = require("mongoose");
const emailValidator = require("../utils/emailValidator");

const authScheme = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require!"],
      min: 2,
      max: 30,
    },
    role: {
      type: String,
      required: [true, "Role is require!"],
      enum: ["STANDARD", "PREMIUM", "STAFF", "ADMIN"],
      default: "STANDARD",
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is require!"],
      lowercase: true,
      validate: {
        validator: (v) => emailValidator(v),
        message: (props) => `${props.value} is a invalid email`,
      },
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is require!"],
    },
    isWholesaler: {
      type: Boolean,
      default: false,
    },
    profile: {
      type: Types.ObjectId,
      refPath: "userprofile",
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    store: [
      {
        type: Types.ObjectId,
        ref: "store",
      },
    ],
    products: [
      {
        type: Types.ObjectId,
        ref: "product",
      },
    ],
    country: {
      type: Types.ObjectId,
      ref: "country",
    },
  },
  { timestamps: true }
);

const Auth = model("auth", authScheme);

module.exports = Auth;
