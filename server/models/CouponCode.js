const { model, Schema } = require("mongoose");

const CouponCodeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    expireAt: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const CouponCode = model("CouponCode", CouponCodeSchema);

module.exports = CouponCode;
