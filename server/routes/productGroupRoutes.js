const router = require("express").Router();
const {
  createProductGroup,
  getProductGroup,
  updateProductGroup,
  getProductsGroup,
} = require("../controllers/productGroupController");

router.get("/", getProductsGroup);
router.get("/:id", getProductGroup);

router.post("/", createProductGroup);
router.patch("/:id", updateProductGroup);

module.exports = router;
