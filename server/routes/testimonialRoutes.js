const router = require("express").Router();

const {
  getTestimonial,
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get("/", getTestimonials);
router.get("/:id", isAuthenticated([userType.admin]), getTestimonial);

router.post("/", isAuthenticated([userType.admin]), createTestimonial);
router.patch("/:id", isAuthenticated([userType.admin]), updateTestimonial);
router.delete("/:id", isAuthenticated([userType.admin]), deleteTestimonial);

module.exports = router;
