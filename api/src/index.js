require('dotenv').config();
const express = require('express')
const morgan = require('morgan');
const cors = require ('cors')

const PORT = process.env.PORT || 3005;
//import roles
const { createRoles, createAdmin } = require('../src/lib/initialSetup.js')


//Initialitation
const app = express()
createRoles();
createAdmin();
require('./db.js')

//metodo para entender los obj json
app.use(express.json())

//cors
app.use(cors());

//middlewares
app.use(morgan('dev'));

//metodo que sirve recibir los datos desde el cliente 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
//Routes
const routes = require("./routes/index.js");
app.use("/", routes);

//stating the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})