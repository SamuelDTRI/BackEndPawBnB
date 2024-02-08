const { Router } = require("express");

const  locationsHandler = require( "../handlers/locationsHandler.js");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json("ok");
});
// ruta para el manejo del modelo Locations
mainRouter.get("/locations", locationsHandler);

module.exports = { mainRouter };