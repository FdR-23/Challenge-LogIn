require('dotenv').config();
const express = require('express')
const morgan = require('morgan');

const PORT = process.env.PORT || 3005;

//Initialitation
const app = express()
require('./db.js')



//middlewares
app.use(morgan('dev'));

//metodo que sirve recibir los datos desde el cliente 
app.use(express.urlencoded({ extended: true, limit: '50mb'  }));
//Routes
const routes = require("./routes/index.js");
app.use("/", routes);

//stating the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})