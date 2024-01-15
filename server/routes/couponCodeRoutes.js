const router = require("express").Router();

const {
  createCouponCode,
  getCouponCodes,
  updateCouponCode,
  deleteCouponCode,
  verifyCoupon,
} = require("../controllers/couponCodeControllers");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router
  .route("/", isAuthenticated([userType.admin, userType.staff]))
  .get(getCouponCodes)
  .post(createCouponCode);

router
  .route("/:id", isAuthenticated([userType.admin, userType.staff]))
  .patch(updateCouponCode)
  .delete(deleteCouponCode);

router.route("/verify").post(verifyCoupon);

module.exports = router;
