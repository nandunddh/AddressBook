const express = require("express");

const app = express();

const AuthRoute = require("./AuthRoutes");
const ContactRoute = require("./ContactRoute");


const { auth } = require("../middlewares/Auth");


app.use("/auth", AuthRoute);
app.use("/contact",auth,ContactRoute);

module.exports = app;
