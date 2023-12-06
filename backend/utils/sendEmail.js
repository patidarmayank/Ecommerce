const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

//


// used from chat gpt for implementing but not worked
// const nodemailer = require('nodemailer');

// const { google } = require('googleapis');
// const fs = require('fs');

// const OAuth2 = google.auth.OAuth2;

// // Load your OAuth2 credentials from the JSON file
// const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

// const oauth2Client = new OAuth2(
//   credentials.installed.client_id,
//   credentials.installed.client_secret,
//   credentials.installed.redirect_uris[0]
// );

// oauth2Client.setCredentials({
//   refresh_token: credentials.installed.refresh_token,
// })

// // const transporter = nodemailer.createTransport({
// //   service: 'Gmail',
// //   auth: {
// //     type: 'OAuth2',
// //     user: 'your.email@gmail.com',
// //     clientId: credentials.installed.client_id,
// //     clientSecret: credentials.installed.client_secret,
// //     refreshToken: credentials.installed.refresh_token,
// //     accessToken: oauth2Client.getAccessToken(),
// //   },
// // });

// // const mailOptions = {
// //   from: 'your.email@gmail.com',
// //   to: 'recipient@example.com',
// //   subject: 'Hello from Node.js with OAuth2',
// //   text: 'This is a test email sent from Node.js using nodemailer with OAuth2.',
// // };

// // transporter.sendMail(mailOptions, (error, info) => {
// //   if (error) {
// //     console.log('Error sending email: ', error);
// //   } else {
// //     console.log('Email sent: ', info.response);
// //   }
// // });

