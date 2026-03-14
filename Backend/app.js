const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/", (req, res, next) => {
    res.send("It is working");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://Bhagya:Bhagya2001@cluster0.nhnwzgp.mongodb.net/")
    .then(() => console.log('MongoDB connected'))
    .then(() => {
        app.listen(5000);
    })
    .catch(err => console.log(err));