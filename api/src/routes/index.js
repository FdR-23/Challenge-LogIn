const express = require("express")
const router = express.Router();

const authCtrl = require('../controllers/auth.controller.js')
const veryToken = require('../middleware/authorization.js')
const clientRoutes = require('./client.routes.js')
const verySession = require('../controllers/controlSession.js')
const userDetails = require('../controllers/controllers_user/userDetail')
const getNameClient = require('../controllers/controllers_client/client_get-name')

//CRUD CLIENT
router.use('/client', veryToken, clientRoutes)

//Find Client By Name
router.get('/client_name', getNameClient)


//REGISTER
router.post('/signup', authCtrl.signUp)

//LOGIN
router.post('/login', authCtrl.logIn)

//Status Login
router.get('/login', verySession)

router.get('/user/:userId', userDetails)





module.exports = router;