const mongoose = require("mongoose");

// Schema for Stripe payment method
const stripePaymentSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  // Add other fields specific to Stripe if needed
});

// Schema for PayPal payment method
const paypalPaymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  // Add other fields specific to PayPal if needed
});

// Schema for Manual payment method
const manualPaymentSchema = new mongoose.Schema({
  // Define fields for manual payment details
  // This could include things like payment reference number, bank details, etc.
  referenceNumber: {
    type: String,
    required: true,
  },
  // Add other fields specific to manual payment if needed
});

// Schema for Payment
const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["Stripe", "PayPal", "Manual"], // Types of payment methods allowed
    required: true,
  },
  stripe: stripePaymentSchema,
  paypal: paypalPaymentSchema,
  manual: manualPaymentSchema,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
