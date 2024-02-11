const { Router } = require("express");
const {
  getAllOwnersHandler,
} = require("../../handlers/Owners/getAllOwnersHandler");
const {
  createOwnersHandler,
} = require("../../handlers/Owners/createOwnersHandler");
const { updateOwnerHandler } = require("../../handlers/Owners/updateOwnersHandler");
const { getOwnerByIdHandler } = require("../../handlers/Owners/getOwnerByIdHandler");

const ownersRouter = Router();

ownersRouter.get("/", getAllOwnersHandler);
ownersRouter.get("/:id", getOwnerByIdHandler);
ownersRouter.post("/", createOwnersHandler);
ownersRouter.put("/", updateOwnerHandler);
ownersRouter.delete("/");

module.exports = { ownersRouter };
