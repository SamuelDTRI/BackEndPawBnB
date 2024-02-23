const { Router } = require("express");
const { createSession } = require("../../controllers/Pay/payController");

const payRouter = Router();

payRouter.post("/create-checkout-session", createSession);
payRouter.get("/success", (req, res) => res.send("success"));
payRouter.get("/cancel", (req, res) => res.send("cancel"));

module.exports = { payRouter };
