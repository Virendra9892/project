var express = require('express');
var router = express.Router();
const candidateController = require("../controllers/candidateControllers")
const auth = require("../middleware/auth");
/* GET home page. */
router.post('/register', candidateController.registerCandidate);
router.post('/login',candidateController.loginCandidate);
router.post("/logout",candidateController.logoutCandidate);
router.get("/get",auth,candidateController.findCandidate)


module.exports = router;
