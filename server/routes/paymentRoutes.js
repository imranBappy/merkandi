const {
  successPayment,
  initPayment,
} = require("../controllers/stripeController.js");

const {
  createPayment,
  successPayment: successPaypalPayment,
} = require("../controllers/paypalController.js");
const router = require("express").Router();

router.post("/stripe/init", initPayment);
router.post("/stripe/success", successPayment);

router.post("/paypal/init", createPayment);
router.post("/paypal/success", successPaypalPayment);

module.exports = router;
