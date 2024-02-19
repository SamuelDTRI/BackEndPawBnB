const { Router } = require("express");
const {
  getAllOwnersHandler,
} = require("../../handlers/Owners/getAllOwnersHandler");
const {
  createOwnersHandler,
} = require("../../handlers/Owners/createOwnersHandler");
const {
  updateOwnerHandler,
} = require("../../handlers/Owners/updateOwnersHandler");
const {
  getOwnerByIdHandler,
} = require("../../handlers/Owners/getOwnerByIdHandler");
const {
  updateDeletedOwnersHandler,
} = require("../../handlers/Owners/updateDeletedOwnersHandler");
const {
  deleteOwnersHandler,
} = require("../../handlers/Owners/deleteOwnersHandler");

const ownersRouter = Router();

ownersRouter.get("/", getAllOwnersHandler);
ownersRouter.get("/:id", getOwnerByIdHandler);
ownersRouter.post("/", createOwnersHandler);
ownersRouter.put("/", updateOwnerHandler);
ownersRouter.put("/delete/:id", updateDeletedOwnersHandler);
ownersRouter.delete("/:id", deleteOwnersHandler);

module.exports = { ownersRouter };
