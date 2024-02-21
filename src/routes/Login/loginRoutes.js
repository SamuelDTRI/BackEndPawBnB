const { Router } = require("express");
const { loginUserHandler }= require("../../handlers/Login/loginHandler.js")

const loginRouter = Router();

loginRouter.post("/", loginUserHandler);

module.exports = { loginRouter };
