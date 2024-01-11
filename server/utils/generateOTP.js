const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP');

exports.generateOTP = async () => {
    try {
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
        return otp;
    } catch (error) {
        throw new Error(error.message);
    }
};