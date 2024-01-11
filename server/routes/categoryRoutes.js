const router = require("express").Router();
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get(
  "/",
  // isAuthenticated([userType.admin, userType.staff]),
  getCategories
);
router.get("/:id", getCategory);

router.post("/", createCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
