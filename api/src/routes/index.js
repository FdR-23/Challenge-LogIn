const express = require("express")
const router = express.Router();

const authCtrl = require('../controllers/auth.controller.js')
const veryToken = require('../middleware/authorization.js')
const clientRoutes = require('./client.routes.js')


//CRUD CLIENT
router.use('/client', veryToken, clientRoutes)


//REGISTER
router.post('/signup', authCtrl.signUp)

//LOGIN
router.post('/login', authCtrl.logIn)


router.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = router;