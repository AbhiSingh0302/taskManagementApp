const path = require("path");

exports.signupPage = (req,res) => {
    return res.status(201).sendFile(path.join(__dirname,"../public","/signup.html"))
}

exports.signupReq = (req,res) => {
    console.log(req.body);
}