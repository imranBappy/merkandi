

function verifyAccountTemplate(user, verificationLink) {
    return ` <p>Dear ${user.name},</p>
      <p>Thank you for registering with our website. Please click the following link to verify your email address:</p>
      <p><a href="${verificationLink}">${verificationLink}</a></p>
      <p>If you did not create an account on our website, please ignore this email.</p>
      <p>Best regards,</p>
      <p>Imran Hossen</p>
    `
}


module.exports = verifyAccountTemplate;