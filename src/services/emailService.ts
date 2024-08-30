import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import { IEmailService } from '../interfaces/IEmailService';

dotenv.config();

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' 
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

export const sendEmail: IEmailService['sendEmail'] = async (to, subject, text) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true para 465, false para outras portas
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token || '', 
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso:', result);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};
