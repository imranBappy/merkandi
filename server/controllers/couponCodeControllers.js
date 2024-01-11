const CouponCode = require("../models/CouponCode");

exports.createCouponCode = async (req, res, next) => {
  try {
    const { code, discount, expireAt } = req.body;
    const couponCode = await CouponCode.create({
      code,
      discount,
      expireAt,
    });
    res.status(201).json(couponCode);
  } catch (error) {
    next(error);
  }
};

exports.getCouponCodes = async (req, res, next) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const couponCodes = await CouponCode.find()
      .limit(limit)
      .skip((page - 1) * limit);
    const total = await CouponCode.countDocuments();
    res.status(200).json({
      couponCodes,
      total,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateCouponCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;
    const couponCode = await CouponCode.findById(id);
    if (!couponCode) {
      return res.status(404).json({
        success: false,
        message: "Coupon Code not found",
      });
    }
    couponCode.isActive = isActive;

    await couponCode.save();
    res.status(200).json(couponCode);
  } catch (error) {
    next(error);
  }
};

exports.deleteCouponCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const couponCode = await CouponCode.findById(id);
    if (!couponCode) {
      return next("Coupon Code not found");
    }
    await couponCode.deleteOne();
    res.status(200).json({
      success: true,
      message: "Coupon Code deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
