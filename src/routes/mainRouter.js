const { Router } = require("express");
const { ownersRouter } = require("./Owners/ownersRouter");
const { sittersRouter } = require("./Sitters/sittersRouter");
const { dogsRouter } = require("./Dogs/dogsRouter");
const { bookingsRouter } = require("./Bookings/bookingsRouter");
const { locationsRouter } = require("./Locations/locationsRouter.js");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json("ok");
});

mainRouter.use("/owners", ownersRouter);
mainRouter.use("/sitters", sittersRouter);
mainRouter.use("/dogs", dogsRouter);
mainRouter.use("/bookings", bookingsRouter);
// ruta para el manejo del modelo Locations
mainRouter.use("/locations", locationsRouter);

module.exports = { mainRouter };
