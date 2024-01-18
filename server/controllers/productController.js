const Auth = require("../models/Auth");
const Brand = require("../models/Brand");
const Category = require("../models/Category");
const Product = require("../models/Product");
const Subcategory = require("../models/Subcategories");
const ProductGroup = require("../models/productGroup");

exports.productShop = async (req, res, next) => {
  try {
    const {
      category = "",
      brand = "",
      subcategory = "",
      term = "",
      page = 1,
      status = "",
      productGroup = "",
    } = req.query;
    const currentPage = parseInt(page);
    const PER_PAGE = 10;

    const { label, country } = req.body;

    const filterObj = {
      ...(category && { category }),
      ...(brand && { brand }),
      ...(subcategory && { subcategory }),
      ...(status && { status }),
      ...(productGroup && { productGroup }),
      ...(label && { label: { $in: label } }),
      ...(country && { country: { $in: country } }),
      ...(term && { $text: { $search: term } }),
    };

    const products = await Product.find(filterObj)
      .populate("image", "url")
      .populate("gallery", "url")
      .populate("brand", "-products -createdAt -updatedAt -__v")
      .populate("category", "-products -subcategory -createdAt -updatedAt -__v")
      .populate("subcategory", "-products -createdAt -updatedAt -__v")
      .populate("productGroup", "-products -createdAt -updatedAt -__v")
      .populate("user")
      .populate("country")
      .skip(PER_PAGE * currentPage - PER_PAGE)
      .limit(PER_PAGE);

    const totalProduct = await Product.countDocuments(filterObj);

    res.status(200).json({
      total: totalProduct,
      products: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getProducts = async (req, res, next) => {
  try {
    const {
      category = "",
      brand = "",
      subcategory = "",
      term = "",
      page = 1,
      status = "",
      productGroup = "",
      label = "",
      country = "",
      user = "",
    } = req.query;
    const currentPage = parseInt(page);
    const PER_PAGE = 10;

    const filterObj = {
      ...(category && { category }),
      ...(brand && { brand }),
      ...(subcategory && { subcategory }),
      ...(status && { status }),
      ...(productGroup && { productGroup }),
      ...(label && { label: { $in: label } }),
      ...(country && { country: { $in: label } }),
      ...(term && { $text: { $search: term } }),
      ...(user && { user }),
    };

    const products = await Product.find(filterObj)
      .populate("image", "url")
      .populate("gallery", "url")
      .populate("brand", "-products -createdAt -updatedAt -__v")
      .populate("category", "-products -subcategory -createdAt -updatedAt -__v")
      .populate("subcategory", "-products -createdAt -updatedAt -__v")
      .populate("productGroup", "-products -createdAt -updatedAt -__v")
      .populate("user")
      .populate("country")
      .skip(PER_PAGE * currentPage - PER_PAGE)
      .limit(PER_PAGE);

    const totalProduct = await Product.countDocuments(filterObj);

    res.status(200).json({
      total: totalProduct,
      products: products,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id)
      .populate("image")
      .populate("gallery")
      .populate("brand")
      .populate("category")
      .populate("subcategory")
      .populate("productGroup")
      .populate({
        path: "country",
        populate: {
          path: "flag",
        },
      })
      .populate("user", "email name phone");

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    console.log(req.body?.user || req.user);
    const newProduct = {
      ...req.body,
      user: req.body?.user || req.user,
    };

    const product = new Product(newProduct);
    if (req.body.category) {
      await Category.findByIdAndUpdate(newProduct.category, {
        $push: {
          products: product._id,
        },
      });
    }

    if (newProduct.user) {
      await Auth.findByIdAndUpdate(newProduct.user, {
        $push: {
          products: product._id,
        },
      });
    }

    if (newProduct.subcategory) {
      await Subcategory.findByIdAndUpdate(newProduct.subcategory, {
        $push: {
          products: product._id,
        },
      });
    }

    if (newProduct.brand) {
      await Brand.findByIdAndUpdate(newProduct.brand, {
        $push: {
          products: product._id,
        },
      });
    }
    if (newProduct.productGroup) {
      await ProductGroup.findByIdAndUpdate(newProduct.productGroup, {
        $push: {
          products: product._id,
        },
      });
    }

    // Save the product
    await product.save();
    // Send the product in the response
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      price,
      salePrice,
      minimalOrder,
      image,
      gallery,
      brand,
      category,
      subcategory,
      negotiable,
      status,
      tags,
      wholesale,
      wholesalePrices,
      country,
      label,
      unit,
      acceptPayments,
      deliveryOptions,
      stock,
      sold,
    } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        salePrice,
        minimalOrder,
        image,
        gallery,
        brand,
        category,
        subcategory,
        negotiable,
        status,
        tags,
        wholesale,
        wholesalePrices,
        country,
        label,
        unit,
        acceptPayments,
        deliveryOptions,
        stock,
        sold,
      },
      { new: true }
    );

    if (req.body.category) {
      if (product.category) {
        await Category.findByIdAndUpdate(product.category, {
          $pull: {
            products: product._id,
          },
        });
      }
      await Category.findByIdAndUpdate(req.body.category, {
        $push: {
          products: product._id,
        },
      });
    }
    if (req.body.subcategory) {
      if (product.subcategory) {
        await Subcategory.findByIdAndUpdate(product.subcategory, {
          $pull: {
            products: product._id,
          },
        });
      }

      await Subcategory.findByIdAndUpdate(req.body.subcategory, {
        $push: {
          products: product._id,
        },
      });
    }
    if (req.body.brand) {
      if (product.brand) {
        await Brand.findByIdAndUpdate(product.brand, {
          $pull: {
            products: product._id,
          },
        });
      }

      await Brand.findByIdAndUpdate(req.body.brand, {
        $push: {
          products: product._id,
        },
      });
    }
    if (req.body.productGroup) {
      if (product.productGroup) {
        await ProductGroup.findByIdAndUpdate(product.productGroup, {
          $pull: {
            products: product._id,
          },
        });
      }

      await ProductGroup.findByIdAndUpdate(req.body.productGroup, {
        $push: {
          products: product._id,
        },
      });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (product.category) {
      await Category.findByIdAndUpdate(product.category, {
        $pull: {
          products: product._id,
        },
      });
    }
    if (product.subcategory) {
      await Subcategory.findByIdAndUpdate(product.subcategory, {
        $pull: {
          products: product._id,
        },
      });
    }
    if (product.brand) {
      await Brand.findByIdAndUpdate(product.brand, {
        $pull: {
          products: product._id,
        },
      });
    }
    if (product.productGroup) {
      await ProductGroup.findByIdAndUpdate(product.productGroup, {
        $pull: {
          products: product._id,
        },
      });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
