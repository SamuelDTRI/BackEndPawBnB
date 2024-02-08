const { Router } = require("express");
const {
  getAllOwnersHandler,
} = require("../../handlers/Owners/getAllOwnersHandler");
const {
  createOwnersHandler,
} = require("../../handlers/Owners/createOwnersHandler");

const ownersRouter = Router();

ownersRouter.get("/", getAllOwnersHandler);
ownersRouter.get("/:id");
ownersRouter.post("/", createOwnersHandler);
ownersRouter.put("/");
ownersRouter.delete("/");

module.exports = { ownersRouter };
