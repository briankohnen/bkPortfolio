const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.submit = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return;
      }
  
      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `feeling ${req.body.feeling}`,
        text: `${req.body.name} from ${req.body.compName}, message: ${req.body.message}`,
        html: `<h1>${req.body.name} from ${req.body.compName}</h1><br></br><p>message: ${req.body.message}</p>`
      };
  
      mailTransport.sendMail(mailOptions);
  
      res.status(200).end();
      // or you can pass data to indicate success.
      // res.status(200).send({isEmailSend: true});
    });
  });