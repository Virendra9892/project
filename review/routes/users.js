var express = require('express');
var router = express.Router();
const time = require("../controller/index")
const auth = require("../middleware/auth")
/* GET users listing. */
router.get('/currentTime',auth,time.currentTime);

module.exports = router;
