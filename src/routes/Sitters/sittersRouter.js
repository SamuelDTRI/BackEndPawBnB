const { Router } = require("express");
const {
  getAllSittersHandler,
} = require("../../handlers/Sitters/getAllSittersHandler");
const {
  createSittersHandler,
} = require("../../handlers/Sitters/createSittersHandler");

const sittersRouter = Router();

sittersRouter.get("/", getAllSittersHandler);
sittersRouter.get("/:id");
sittersRouter.post("/", createSittersHandler);
sittersRouter.put("/");
sittersRouter.delete("/");

module.exports = { sittersRouter };
