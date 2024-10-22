import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendAlert = async (message:string) => {
  const mailOptions = {
    from: 'codesignspa@gmail.com',
    to: 'mrdgamingreal@gmail.com',
    subject: 'Alert Notification',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Alert sent:', message);
  } catch (error) {
    console.error('Error sending alert:', error);
  }
};
