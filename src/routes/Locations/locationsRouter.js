const { Router } = require("express");
const getLocationsHandler = require("../../handlers/Locations/getLocationsHandler.js")

const locationsRouter = Router();

locationsRouter.get("/", getLocationsHandler )

module.exports = { locationsRouter };