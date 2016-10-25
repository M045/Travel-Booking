var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'travel.details169@gmail.com',
        pass: 'abhijeet@169'
    }
}, {
    from: 'Travel<travel.details169@gmail.com>'
});

app.get('/postEmail', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var message = {
        to: '"' + req.query.fName + '' + req.query.lName + '"<' + req.query.email + '>',
        subject: 'Booking Information',
        html: '<h3>Your Booking is confirmed</h3>' +
        '<tr>' +
        '<table style="width:80%;border: 1px solid black; ">' +
        ' <th style="border: 1px solid black; background-color: #DCECF9">FirstName</th>' +
        ' <th style="border: 1px solid black; background-color: #DCECF9"">LastName</th>' +
        ' <th style="border: 1px solid black; background-color: #DCECF9"">Phone</th>' +
        ' <th style="border: 1px solid black; background-color: #DCECF9"">Location</th>' +
        ' <th style="border: 1px solid black; background-color: #DCECF9"">DepartDate</th>' +
        ' <th style="border: 1px solid black; background-color: #DCECF9"">ReturnDate</th>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 1px solid black; text-align: center">' + req.query.fName + '</td>' +
        '<td style="border: 1px solid black; text-align: center"">' + req.query.lName + '</td>' +
        '<td style="border: 1px solid black; text-align: center"">' + req.query.phone + '</td>' +
        '<td style="border: 1px solid black; text-align: center"">' + req.query.location + '</td>' +
        '<td style="border: 1px solid black; text-align: center"">' + req.query.departDate + '</td>' +
        '<td style="border: 1px solid black; text-align: center"">' + req.query.returnDate + '</td>' +
        '</tr>' +
        '</table>' +

        ' <h3>Thanks</h3>'+
        ' <h3>regards,</h3>'+
        ' <h4>travelyaari</h4>'

    };

    transporter.sendMail(message, function (error) {
        if (error) {
            res.send('Message not sent successfully!', req.query);
            return;
        }
        res.send(req.query);
        console.log('Message sent successfully!');

    });
});

app.listen(7000, function () {
    console.log('app listening the port 7000');
});