const { Router } = require("express");
const {checkRegistrationHandler} = require("../../handlers/CheckRegistration/checkRegistrationHandler.js");

const checkRegistrationRouter = Router();

checkRegistrationRouter.get("/", checkRegistrationHandler);

module.exports = { checkRegistrationRouter };
