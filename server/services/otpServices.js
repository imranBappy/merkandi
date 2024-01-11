// controllers/otpController.js
const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP');
const User = require('../models/Auth');

exports.sendOTP = async (email) => {
  try {
    console.log({email});
    // Check if user is already present
    const checkUserPresent = await User.findOne({ email });
    // If user found with provided email
    if (checkUserPresent) {
      return  new Error('User is already registered')
    }
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }
    const otpPayload = { email, otp };
    await OTP.create(otpPayload);
    console.log('Successfully send otp');
    return otp;
  } catch (error) {
    console.log(error.message);
    return new Error(error.message);
  }
};