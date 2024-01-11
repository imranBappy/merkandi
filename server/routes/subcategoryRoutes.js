const router = require("express").Router();
const {
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
  getSubcategories,
  getSubcategory,
} = require("../controllers/subcategoryController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", getSubcategories);
router.get("/:id", getSubcategory);

router.post("/", createSubcategory);
router.patch("/:id", updateSubcategory);
router.delete("/:id", deleteSubcategory);

module.exports = router;
