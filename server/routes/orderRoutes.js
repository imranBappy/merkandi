const router = require("express").Router();

const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
} = require("../controllers/orderController");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { userType } = require("../utils/userType");

router.get(
  "/",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  getOrders
);
router.get(
  "/:id",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  getOrder
);

router.post(
  "/",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  createOrder
);

router.put(
  "/:id",
  isAuthenticated([
    userType.admin,
    userType.staff,
    userType.standard,
    userType.premium,
  ]),
  updateOrder
);

module.exports = router;
