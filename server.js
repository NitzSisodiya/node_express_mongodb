const express = require('express')
// const jwt = require("jsonwebtoken")
const app =express();
const dotenv = require('dotenv')

const routes =require('./routes')
app.use(routes);
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myNodeTask').then( () =>{
    console.log("succesfully connected")
}).catch( (e) =>{
    console.log("error ",e)
})

dotenv.config();
const port =process.env.PORT || 7000
app.listen(port, ()=>{
    console.log(`Server is crreated ${port}`)
})

