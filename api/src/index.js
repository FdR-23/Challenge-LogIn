require('dotenv').config();
const express = require('express')
const morgan = require('morgan');
const cors = require ('cors')

const PORT = process.env.PORT || 3005;
//import roles
const { createRoles, createAdmin } = require('../src/lib/initialSetup.js')


//Initialitation
const app = express()
require('./db.js')
createRoles();
createAdmin();

//metodo para entender los obj json
app.use(express.json())

//cors
app.use(cors());

//middlewares
app.use(morgan('dev'));

//metodo que sirve recibir los datos desde el cliente 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



//Routes
const routes = require("./routes/index.js");
app.use("/", routes);

//stating the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})