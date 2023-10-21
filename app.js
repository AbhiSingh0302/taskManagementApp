const express = require("express");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const connectDB = require("./utils/db");
require("dotenv").config();
connectDB();

const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());

app.use(signupRouter);
app.use(signinRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})