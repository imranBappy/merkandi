const router = require("express").Router();
const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", getBrands);
router.get("/:id", getBrand);

router.post("/", createBrand);
router.patch("/:id", updateBrand);
router.delete("/:id", deleteBrand);

module.exports = router;
