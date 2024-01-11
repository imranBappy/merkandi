const { Schema, model} = require("mongoose");
const sendEmail = require("../utils/sentEmail");

const otpSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
  try {
    const template =`<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
        await sendEmail({
            template: template,
            subject:"Verification Email"
        }, email)
   
    console.log("Email sent successfully ");
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}
otpSchema.pre("save", async function (next) {
  console.log("New document saved to the database");
  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});


module.exports = model("OTP", otpSchema);
