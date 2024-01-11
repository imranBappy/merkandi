const { Schema, model, Types } = require("mongoose");

const testimonialScheme = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    review: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Testimonial = model("testimonial", testimonialScheme);

module.exports = Testimonial;
