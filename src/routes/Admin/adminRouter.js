const { Router } = require("express");
const {createAdminHandler} = require("../../handlers/Admin/createAdminHandler.js");
const {adminLoginHandler} = require("../../handlers/Admin/adminLoginHandler.js");
const { getAdminInfoHandler } = require("../../handlers/Admin/getAdminInfoHandler.js");

const adminRouter = Router();

adminRouter.post("/", createAdminHandler);
adminRouter.post("/login", adminLoginHandler)
adminRouter.get("/:id",getAdminInfoHandler)


module.exports = { adminRouter };
