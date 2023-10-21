const express = require("express");
const signupRouter = require("./routes/signup");
require("dotenv").config();

const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());

app.use(signupRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})