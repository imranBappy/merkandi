const router = require("express").Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  productShop,
} = require("../controllers/productController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.post("/shop", productShop);
router.get("/", getProducts);
router.get("/:id", getProduct);

router.post(
  "/",
  isAuthenticated([userType.admin, userType.premium]),
  createProduct
);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
