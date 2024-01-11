const nodemailer = require("nodemailer");

async function sendEmail({template,subject}, to) {
    try {
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'imranbappy.official@gmail.com',
            pass: 'lyvbydklyqrfzvxu'
        }
    });

    var mailOptions = {
        from: 'imranbappy.official@gmail.com',
        to: to,
        subject: subject,
        html: template
    };

    const res = await transporter.sendMail(mailOptions);
    return res;
    } catch (error) {
        return new Error(error.message);
    }
}

module.exports = sendEmail;