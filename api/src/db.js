require("dotenv").config();

const mongoose = require('mongoose');


const {URI, MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT  }= process.env;

mongoose.connect(URI || `mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }`, (error) => {
    if (error) {
        console.error(error)
    }else
    console.log('Database is connected')
})