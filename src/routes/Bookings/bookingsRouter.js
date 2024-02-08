const { Router } = require("express");
const {
  getAllBookingsHandler,
} = require("../../handlers/Bookings/getAllBookingsHandler");
const {
  createBookingsHandler,
} = require("../../handlers/Bookings/createBookingsHandler");

const bookingsRouter = Router();

bookingsRouter.get("/", getAllBookingsHandler);
bookingsRouter.get("/:id");
bookingsRouter.post("/", createBookingsHandler);
bookingsRouter.put("/");
bookingsRouter.delete("/");

module.exports = { bookingsRouter };
