const router = require("express").Router();
const {
  getCountries,
  getCountry,
  createCountry,
  updateCountry,
} = require("../controllers/countryController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.get("/", getCountries);
router.get("/:id", getCountry);

router.post("/", createCountry);
router.patch("/:id", updateCountry);
// router.delete("/:id", isAuthenticated, );

module.exports = router;
