const { Router } = require("express");
const { getAllDogsHandler } = require("../../handlers/Dogs/getAllDogsHandler");
const { createDogsHandler } = require("../../handlers/Dogs/createDogsHandler");
const {
  getDogsByIdHandler,
} = require("../../handlers/Dogs/getDogsByIdHandler");
const {
  updateDeletedDogsHandler,
} = require("../../handlers/Dogs/updateDeletedDogsHandler");
const { deleteDogsHandler } = require("../../handlers/Dogs/deleteDogsHandler");

const dogsRouter = Router();

dogsRouter.get("/", getAllDogsHandler); // todos los dogs
dogsRouter.get("/:id", getDogsByIdHandler); //dogs por id
dogsRouter.post("/", createDogsHandler); //crear dogs
dogsRouter.put("/:id/deleted", updateDeletedDogsHandler); //borrado logico
dogsRouter.delete("/:id", deleteDogsHandler); // eliminar dogs

module.exports = { dogsRouter };
