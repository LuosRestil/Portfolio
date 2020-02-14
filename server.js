require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/public", express.static(process.cwd() + "/public"));

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/email", (req, res) => {
  var mailOptions = {
    from: `briansmithdev.com <${req.body.email}>`,
    to: process.env.EMAIL,
    subject: "PORTFOLIO MESSAGE",
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\n\n${req.body.text}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send(info);
    }
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
const listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
