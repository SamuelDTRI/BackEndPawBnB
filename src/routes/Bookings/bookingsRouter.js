const { Router } = require("express");
const {
  getAllBookingsHandler,
} = require("../../handlers/Bookings/getAllBookingsHandler");
const {
  createBookingsHandler,
} = require("../../handlers/Bookings/createBookingsHandler");
const {
  deleteBookingsHandler,
} = require("../../handlers/Bookings/deleteBookingsHandler");
const {
  updateBookingStatusHandler,
} = require("../../handlers/Bookings/updateBookingStatusHandler");
const {
  getBookingsByIdHandler,
} = require("../../handlers/Bookings/getBookingsByIdHandler");
const {
  updateBookingsDeletedHandler,
} = require("../../handlers/Bookings/updateBookingsDeletedHandler");

const bookingsRouter = Router();

bookingsRouter.get("/", getAllBookingsHandler); // todas las bookings
bookingsRouter.get("/:id", getBookingsByIdHandler); // reserva por id
bookingsRouter.post("/", createBookingsHandler); // creacion de reserva
bookingsRouter.put("/:id/status", updateBookingStatusHandler); //cambio de estado de la reserva(pendiente/aprobado etc)
bookingsRouter.put("/:id/deleted", updateBookingsDeletedHandler); //borrado logico 
bookingsRouter.delete("/:id", deleteBookingsHandler); // eliminar reservas

module.exports = { bookingsRouter };
