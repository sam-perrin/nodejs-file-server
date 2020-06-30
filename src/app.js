const express = require('express');
const path = require('path')

const app = express();

// static routes to help with angular component url redirects etc
app.use("/uploads",express.static(path.join(__dirname,'assets')));

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'assets'))
});

module.exports = app;