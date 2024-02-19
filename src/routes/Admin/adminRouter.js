const { Router } = require("express");
const {createAdminHandler} = require("../../handlers/Admin/createAdminHandler.js");
const {adminLoginHandler} = require("../../handlers/Admin/adminLoginHandler.js")

const adminRouter = Router();

adminRouter.post("/", createAdminHandler);
adminRouter.post("/login", adminLoginHandler)


module.exports = { adminRouter };
