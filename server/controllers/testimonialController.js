const Testimonial = require("../models/Testimonial");

exports.getTestimonials = async (req, res, next) => {
  try {
    let { page, limit = 10 } = req.query;
    limit = parseInt(limit);
    const currentPage = parseInt(page) || 1;
    const testimonials = await Testimonial.find({})
      .select("-createdAt -updatedAt -__v")
      .skip(limit * currentPage - limit)
      .limit(limit);

    const total = await Testimonial.countDocuments();
    res.status(200).json({ total: total, testimonials: testimonials });
  } catch (error) {
    next(error);
  }
};
exports.getTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return next("Testimonial not found");
    }
    res.status(200).json(testimonial);
  } catch (error) {
    next(error);
  }
};
exports.createTestimonial = async (req, res, next) => {
  try {
    console.log(req.body);

    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    next(error);
  }
};
exports.updateTestimonial = async (req, res, next) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTestimonial) {
      return next("Testimonial not found");
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    next(error);
  }
};
exports.deleteTestimonial = async (req, res, next) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTestimonial) {
      return next("Testimonial not found");
    }
    res.status(200).json(deletedTestimonial);
  } catch (error) {
    next(error);
  }
};
