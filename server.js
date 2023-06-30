const express = require('express')
const trackRoute = express.Router();
const multer = require('multer');
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/route');
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors(
  {
    origin: "http://localhost:4200"
  }

));

app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://127.0.0.1:27017/WUIDComplaintsManagement",{useNewUrlParser: true,  useUnifiedTopology: true })
.then( ()=>
        console.log("Connected to mongo Successful")
    );

app.post("/sendMail",(req,res)=>{
  console.log("request came");
  let user=req.body.email;
  sendMail(user,info => {
    console.log('The mail has been send to user');
    res.send(info);
  });
});

async function sendMail(user,callback){
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
      user:"poojaharshitha9423@gmail.com",
      pass:"Admin@123"
    }
  });
  let mailOptions={
    from:"poojaharshitha9423@gmail.com",
    to:  user,
    subject:"Complaint submitted",
    html:`<h1>Your complaint has ben submitted</h1>`
  };
  let info=await transporter.sendMail(mailOptions);

  callback(info);

  //transporter.sendMail(mailOptions, callback);

}

app.use(express.json());
app.use(routes);

