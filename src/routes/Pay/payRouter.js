const { Router } = require("express");
const { createSession } = require("../../controllers/Pay/payController");

const payRouter = Router();

payRouter.post("/create-checkout-session/:id", createSession);
payRouter.get("/success/:id", (req, res) => res.send("success"));
payRouter.get("/cancel/:id", (req, res) => res.send("cancel"));

module.exports = { payRouter };
