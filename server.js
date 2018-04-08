const express = require('express');
const bodyParser = require("body-parser");
const app = express();
let path = require('path');
let nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'codingandcaring@gmail.com',
           pass: 'Callista.08'
       }
   });

// useful for grabing data out of post requests
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// /**bodyParser.json(options)
//  * Parses the text as JSON and exposes the resulting object on req.body.
//  */
// app.use(bodyParser.json());

// needed for images css files ect
app.use(express.static('static'));
 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'static/index.html'));
});

app.post('/email', function(req, res) {
    sendEmail(req, res);
})


let getdatatFromServer = (request, callback) => {
    let body = ''
    request.on('data', (chunk) => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(body);
    });
};


let sendEmail = (req, res) => {
    getdatatFromServer(req, (body) => {
        let emailInformation = JSON.parse(body);

        let mailOptions = {
            from: `codingandcaring@gmail.com`, // sender address
            replyTo: `${emailInformation.email}`,
            to: 'ashley@codingandcaring.com', // list of receivers
            subject: `${emailInformation.subject}`, // Subject line
            html: `${emailInformation.message}`// plain text body
            };
        
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                res.end('Unable to send Message')
            else
                res.end('Message Received')
            });
    });
};


app.listen(3000);