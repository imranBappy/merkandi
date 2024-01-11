const Auth = require("../models/Auth");
const Store = require("../models/Store");

exports.getStores = async (req, res, next) => {
  try {
    const { page, limit, user, active, Default, type } = req.query;
    const currentPage = parseInt(page) || 1;
    const perPage = parseInt(limit) || 10;

    const query = {
      ...(user && { user: user }),
      ...(active && { active: active }),
      ...(Default && { default: !!Default }),
      ...(type && { type: type }),
    };
    const stores = await Store.find(query)
      .populate({
        path: "country",
        select: "-createdAt -updatedAt -__v",
        populate: {
          path: "flag",
          select: "-createdAt -updatedAt -__v",
        },
      })
      .select("-createdAt -updatedAt -__v")
      .skip(perPage * currentPage - perPage)
      .limit(perPage);

    const total = await Store.countDocuments(query);
    res.status(200).json({ total: total, stores: stores });
  } catch (error) {
    next(error);
  }
};
exports.getStore = async (req, res, next) => {
  try {
    const store = await Store.findOne({ _id: req.params.id });
    if (!store) {
      return next("Store not found");
    }
    res.status(200).json(store);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.createStore = async (req, res, next) => {
  try {
    const newStore = {
      ...req.body,
      user: req.user,
    };

    const auth = await Auth.findById(req.user).populate({
      path: "store",
      select: "-createdAt -updatedAt -__v",
    });

    const isDefault = auth.store.find((store) => store.default === true);
    if (!isDefault) {
      newStore.default = true;
    }

    const store = await Store.create(newStore);

    await Auth.findByIdAndUpdate(req.user, {
      isWholesaler: true,
      $push: { store: store._id },
    });

    res.status(201).json(store);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.updateStore = async (req, res, next) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStore) {
      return next("Store not found");
    }
    res.status(200).json(updatedStore);
  } catch (error) {
    next(error);
  }
};
exports.deleteStore = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
