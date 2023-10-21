const express = require("express");
const signupController = require("../controllers/signup");
const router = express.Router();

router.get("/",signupController.signupPage);
router.post("/signup",signupController.signupReq);

module.exports = router;