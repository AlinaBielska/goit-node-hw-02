const { sendEmail } = require('../mailer/mailer.service');

const sendUserVerificationMail = async (email, verificationToken) => {
    const mailOptions = {
        to: email,
        subject: 'Welcome to our site!',
        text: `Hello! Please verify your account by visiting http://localhost:3000/users/verify/${verificationToken}`,
        html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a>http://localhost:3000/users/verify/${verificationToken}</a>`
    };

    await sendEmail(mailOptions);
};

module.exports = {
    sendUserVerificationMail,
}