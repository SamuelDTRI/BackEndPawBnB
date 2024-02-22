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
const {
  updateInfoDogsHandler,
} = require("../../handlers/Dogs/updateInfoDogsHandler");

const dogsRouter = Router();

dogsRouter.get("/", getAllDogsHandler); // todos los dogs
//GET:http://localhost:3000/dogs
dogsRouter.get("/:id", getDogsByIdHandler); //dogs por id
//GET:http://localhost:3000/dogs/e457d0a2-4570-4912-a83b-ed9367ecd6fb
dogsRouter.post("/", createDogsHandler); //crear dogs
//POST:http://localhost:3000/dogs
//BODY:{ "name": "uwusito","race": "chanda","gender": "female","description": "es linda es bella maggy",
//"feedingInstructions": "come 1 taza de croquetas a las 12:00 y en la noche otra taza de croquetas a las 7",
//"allergies": "no puede tocar u oler ovejas","medicines": "toma xanax por que esta deprimida :c",
//"medicalCondition": "super sana la verdad hasta la alergia le pega poco",
//"behavior": "pasiva, tranquila, super sencilla y cariñosa",
//"vaccination": "tiene todas las vacunas al dia",
//"ownerId": "63b65671-2622-4b59-a2e0-c788a7f8ac06" }
dogsRouter.put("/:id", updateInfoDogsHandler); // actualizacion de datos de perro.
dogsRouter.put("/deleted/:id", updateDeletedDogsHandler); //borrado logico
//PUT:http://localhost:3000/dogs/deleted/e10f3e35-3770-4f36-a1d1-561dd6ef9d08
//BODY: { "deleted": true }
dogsRouter.delete("/:id", deleteDogsHandler); // eliminar dogs
//DELETE:http://localhost:3000/dogs/5bbc44d5-abe8-488c-a11d-8306b31ad7a5

module.exports = { dogsRouter };
