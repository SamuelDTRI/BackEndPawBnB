const { Router } = require("express");

const  getLocations = require( "../controllers/locationsController.js");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json("ok");
});

mainRouter.get("/locations", getLocations);

module.exports = { mainRouter };