require("dotenv").config();
const mongoose = require('mongoose');


const URI = process.env.URI;

mongoose.connect(URI, (error) => {
    if (error) {
        console.error(error)
    }else
    console.log('Database is connected')
})