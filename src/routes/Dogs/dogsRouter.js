const { Router } = require("express");
const { getAllDogsHandler } = require("../../handlers/Dogs/getAllDogsHandler");
const { createDogsHandler } = require("../../handlers/Dogs/createDogsHandler");

const dogsRouter = Router();

dogsRouter.get("/", getAllDogsHandler);
dogsRouter.get("/:id");
dogsRouter.post("/", createDogsHandler);
dogsRouter.put("/");
dogsRouter.delete("/");

module.exports = { dogsRouter };
