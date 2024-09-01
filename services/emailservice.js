const nodemailer = require('nodemailer');

// Configure the email transport service
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'gafrontspace@gmail.com',
        pass: 'ixbniicxiwutcdmx'
     
    },
    tls: {
        rejectUnauthorized: false  // Use this if you face issues with self-signed certificates
    }
});

module.exports = transporter;
