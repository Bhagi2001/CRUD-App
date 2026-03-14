const express = require('express');
const mongoose = require('mongoose');
const router = require('./Route/UserRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use("/users", router);

// Connect to MongoDB
mongoose.connect("mongodb+srv://Bhagya:Bhagya2001@cluster0.nhnwzgp.mongodb.net/")
    .then(() => console.log('MongoDB connected'))
    .then(() => {
        app.listen(5000);
    })
    .catch(err => console.log(err));