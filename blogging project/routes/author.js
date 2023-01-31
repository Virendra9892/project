var express = require('express');
var router = express.Router();
const blogController = require("../controllers/blogController")
const authorController = require("../controllers/authorController")
const auth = require("../middleware/auth")

/* GET author listing. */
router.post('/registerAuthor',authorController.registerAuthor);
router.post("/loginAuthor",authorController.loginAuthor);
router.post("/logoutUser",authorController.logoutUser)
router.get("/getAllAuthor",auth,authorController.getAllAuthor)
router.get("/getAuthorById/:id",auth,authorController.getAuthorById)
router.get("/getAuthorByFilter",auth,authorController.getAuthorByFilter)

// get blog listing

router.post("/registerBlog",blogController.registerBlog)
router.get("/getAllblog",blogController.getAllBlogs)
// router.post("/logoutUser",authorController.logoutUser)

module.exports = router;
