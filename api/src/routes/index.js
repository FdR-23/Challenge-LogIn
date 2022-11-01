const express = require("express")
const router = express.Router();

const authCtrl = require('../controllers/auth.controller.js')

router.post('/signup', authCtrl.signUp)

router.post('/signin', authCtrl.signIn)

router.get('/', (req, res) => {
  res.send('Hello World!')
})


module.exports = router;