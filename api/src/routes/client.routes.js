const express = require("express")
const router = express.Router();

const veryToken = require('../middleware/authorization.js')
const isAdmin = require('../middleware/isAdmin.js')

const newClient = require('../controllers/controllers_client/client_post.js');
const allClient = require('../controllers/controllers_client/client_get.js');
const modClient = require('../controllers/controllers_client/client_put.js');
const deletClient = require('../controllers/controllers_client/client_delete.js');


router.post('/', veryToken, newClient)

router.get('/',isAdmin, allClient)

router.put('/:clientId', modClient)

router.delete('/:clientId', deletClient)



module.exports = router;