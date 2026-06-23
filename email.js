const brevo = require("@getbrevo/brevo");

async function sendEmail(subject, body) {

    const apiInstance =
        new brevo.TransactionalEmailsApi();

    apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        process.env.BREVO_API_KEY
    );

    const email = new brevo.SendSmtpEmail();

    email.sender = {
        name: "Weather Agent",
        email: process.env.SENDER_EMAIL
    };

    email.to = [
        {
            email: process.env.RECIPIENT_EMAIL
        }
    ];

    email.subject = subject;
    email.textContent = body;

    return apiInstance.sendTransacEmail(email);
}

module.exports = { sendEmail };