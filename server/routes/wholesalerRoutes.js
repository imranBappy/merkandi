const router = require("express").Router();
const {
  getWholesalers,
  getWholesaler,
  createWholesaler,
  updateWholesaler,
  deleteWholesaler,
} = require("../controllers/wholesalerControllers");

const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get(
  "/",
  isAuthenticated([
    userType.admin,
    userType.premium,
    userType.staff,
    userType.standard,
  ]),
  getWholesalers
);
router.get(
  "/:id",
  isAuthenticated([
    userType.admin,
    userType.premium,
    userType.staff,
    userType.standard,
  ]),
  getWholesaler
);
router.post(
  "/",
  isAuthenticated([userType.admin, userType.premium]),
  createWholesaler
);
router.patch(
  "/:id",
  isAuthenticated([userType.admin, userType.premium]),
  updateWholesaler
);
router.delete(
  "/:id",
  isAuthenticated([userType.admin, userType.premium]),
  deleteWholesaler
);

module.exports = router;
