require("dotenv").config();

const mongoose = require('mongoose');


const { URI, MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT, ATLAS_URI } = process.env;

// mongoose.connect(URI || `mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }`, (error) => {
//     if (error) {
//         console.error(error)
//     }else
//     console.log('Database is connected')
// })


//conect with atlas
mongoose.connect(ATLAS_URI, (error) => {
    if (error) {
        console.error(error)
    } else
        console.log('Database is connected')
})