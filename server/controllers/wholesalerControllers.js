const Auth = require("../models/Auth");

exports.getWholesalers = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const currentPage = parseInt(page) || 1;
    const perPage = parseInt(limit) || 10;

    const wholesalers = await Auth.find({
      isWholesaler: true,
    })
      .populate({
        path: "store",
        select: "-createdAt -updatedAt -__v",
        match: { default: true },
        populate: {
          path: "country",
          select: "-createdAt -updatedAt -__v",
        },
      })
      .select("-createdAt -updatedAt -__v")
      .skip(perPage * currentPage - perPage)
      .limit(perPage);

    const total = await Auth.countDocuments({
      isWholesaler: true,
    });
    res.status(200).json({ total: total, wholesalers: wholesalers });
  } catch (error) {
    next(error.message);
  }
};
exports.getWholesaler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const wholesaler = await Auth.findById(id)
      .populate({
        path: "store",
        select: "-createdAt -updatedAt -__v",
        match: { default: true },
        populate: {
          path: "country",
          select: "-createdAt -updatedAt -__v",
        },
      })
      .select("-createdAt -updatedAt -__v");

    console.log(wholesaler);

    res.status(200).json(wholesaler);
  } catch (error) {
    next(error.message);
  }
};
exports.createWholesaler = async (req, res, next) => {};
exports.updateWholesaler = async (req, res, next) => {};
exports.deleteWholesaler = async (req, res, next) => {};
