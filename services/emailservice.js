const nodemailer = require('nodemailer');

// Configure the email transport service
// jers wlod csbq mjil
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'gafrontspace@gmail.com',
        pass: 'jerswlodcsbqmjil'
     
    },
    // tls: {
    //     rejectUnauthorized: false  // Use this if you face issues with self-signed certificates
    // }
});

module.exports = transporter;
