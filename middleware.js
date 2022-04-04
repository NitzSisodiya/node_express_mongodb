const express = require("express");
const userRegister = require("./models/userSchema");
const app = express();

app.use(express.json());

exports.auth = async (req, res, next) => {
  console.log("req.body", req.body);


  await userRegister
    .find({ email: req.body.email })    
    .then((user) => {      
      console.log("email--", user);       
      if ( user.length === 0 || user[0].email !== req.body.email ) {
        console.log("user not found or enter a valid email");
        res.send("user not found or enter a valid email");
      } else {
        console.log("passwrd", user.password);
        if (user[0].password !== req.body.password) {
          console.log("incorrect password");
          res.send(" Incorrect password ");
        } else {
          console.log("login sucesfull!");          
          next();
        }
      }
    })
    .catch((e) => {
      res.status(500).send(e);
    });
};
