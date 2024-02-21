const { Router } = require("express");
const { ownersRouter } = require("./Owners/ownersRouter");
const { sittersRouter } = require("./Sitters/sittersRouter");
const { dogsRouter } = require("./Dogs/dogsRouter");
const { bookingsRouter } = require("./Bookings/bookingsRouter");
const { locationsRouter } = require("./Locations/locationsRouter.js");
const { loginRouter } = require("./Login/loginRoutes.js");
const { checkRegistrationRouter} = require("./CheckRegistration/checkRegistrationRouter.js")
const {adminRouter} = require("../routes/Admin/adminRouter.js")

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
// ruta para el manejo de la función login
mainRouter.use("/login", loginRouter);
//ruta para verificar si el usuario registrado por google ya esta en la base de datos
mainRouter.use("/checkRegistration", checkRegistrationRouter)
//Ruta para el manejo de usuarios Admin
mainRouter.use("/admin", adminRouter);

module.exports = { mainRouter };
