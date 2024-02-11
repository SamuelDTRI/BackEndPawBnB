const { Router } = require("express");
const {
  getAllSittersHandler,
} = require("../../handlers/Sitters/getAllSittersHandler");
const {
  createSittersHandler,
} = require("../../handlers/Sitters/createSittersHandler");
const { updateSitterHandler } = require("../../handlers/Sitters/updateSitterHandler");
const { getSitterByIdHandler } = require("../../handlers/Sitters/getSitterByIdHandler");

const sittersRouter = Router();

sittersRouter.get("/", getAllSittersHandler);
sittersRouter.get("/:id", getSitterByIdHandler);
sittersRouter.post("/", createSittersHandler);
sittersRouter.put("/", updateSitterHandler);
sittersRouter.delete("/");

module.exports = { sittersRouter };
