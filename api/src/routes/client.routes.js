const express = require("express")
const router = express.Router();



const newClient = require('../controllers/controllers_client/client_post.js');
const allClient = require('../controllers/controllers_client/client_get.js');
const modClient = require('../controllers/controllers_client/client_put.js');
const deletClient = require('../controllers/controllers_client/client_delete.js');


router.post('/', newClient)

router.get('/', allClient)

router.put('/:clientId', modClient)

router.delete('/:clientId', deletClient)



module.exports = router;