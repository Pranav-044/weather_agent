const nodemailer = require("nodemailer");

async function sendEmail(subject, body) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: `"Weather Agent" <${process.env.SENDER_EMAIL}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: subject,
        text: body
    };

    return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
