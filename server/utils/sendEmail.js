const nodemailer = require('nodemailer');

const sendEmail = async (email, resetToken, userId) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAILER_EMAIL,
                pass: process.env.MAILER_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `Your App <${process.env.MAILER_EMAIL}>`,
            to: email,
            subject: "Reset Password Link",
            html: `
                <p>To reset your password, please use the following button:</p>
                <a href="http://localhost:3000/resetpassword/${resetToken}/${userId}" style="text-decoration:none;">
                    <button style="background-color:#003d89; color:white; padding:10px 20px; border:none; border-radius:5px;
                    font-size:16px; cursor:pointer;">
                        Reset Password
                    </button>
                </a>
            `
        });

        console.log("Reset password email sent successfully:", info.response);
    } catch (error) {
        console.error("Error sending reset password email:", error);
        throw new Error("Failed to send reset password email");
    }
};

module.exports = sendEmail;
