const Brand = require("../models/Brand");

exports.getBrands = async (req, res, next) => {
  try {
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;
    const perPage = 10;

    const brands = await Brand.find({})
      .populate("logo")
      .populate("banner")
      .select("-products -createdAt -updatedAt -__v")
      .skip(perPage * currentPage - perPage)
      .limit(perPage);

    const total = await Brand.countDocuments();
    res.status(200).json({ total: total, brands: brands });
  } catch (error) {
    next(error);
  }
};
exports.getBrand = async (req, res, next) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return next("Brand not found");
    }
    res.status(200).json(brand);
  } catch (error) {
    next(error);
  }
};
exports.createBrand = async (req, res, next) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    next(error);
  }
};
exports.updateBrand = async (req, res, next) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedBrand) {
      return res
        .status(404)
        .json({ success: false, message: "Brand not found" });
    }
    res.status(200).json({ success: true, data: updatedBrand });
  } catch (error) {
    next(error);
  }
};
exports.deleteBrand = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
