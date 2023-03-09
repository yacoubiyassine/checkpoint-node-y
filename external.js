// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'yacoubiyass@gmail.com',
//     pass: 'mlabjopdilpwhhlp'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'yacoubiyass@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// var generator = require('generate-password');

// var password = generator.generate({
// 	length: 20,
// 	numbers: true
// });

// // 'uEyMTw32v9'
// console.log(password);
const { v4: uuidv4 } = require('uuid');
uuidv4();
console.log(uuid4()) 