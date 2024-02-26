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
const { getBookingsByOwnerIdHandler 
} = require("../../handlers/Bookings/getBookingByOwnerIdHandler");

const bookingsRouter = Router();

bookingsRouter.get("/", getAllBookingsHandler); // todas las bookings
//GET:http://localhost:3000/bookings
bookingsRouter.get("/:id", getBookingsByIdHandler); // reserva por id
//GET:http://localhost:3000/bookings/6eeed56c-ae60-4ca3-b7a3-c44ad064f9ba
bookingsRouter.get("/owner/:id",getBookingsByOwnerIdHandler); //reservas de un propietario en especifico
// GET: http://localhost:3000/bookings/owner/1234567890abcdefghi
bookingsRouter.post("/", createBookingsHandler); // creacion de reserva
//POST:http://localhost:3000/bookings
//BODY: {"startDate": "Hoy","status": "pendiente","reviews": "Nada por ahora","rating": "4",
// 	"ownerId": "63b65671-2622-4b59-a2e0-c788a7f8ac06",
// 	"dogSitterId": "dd62ec45-a889-42ea-af6e-95d229fcb494",
// 	"dogId": "e457d0a2-4570-4912-a83b-ed9367ecd6fb" }
bookingsRouter.put("/status/:id", updateBookingStatusHandler); //cambio de estado de la reserva(pendiente/aprobado etc)
//PUT:http://localhost:3000/bookings/status/e39f93e1-c539-429b-89f9-a5122a9f67e1
//BODY: { "status": "pendiente" }
bookingsRouter.put("/deleted/:id", updateBookingsDeletedHandler); //borrado logico (DASHBOARD-ADMIN)
//PUT:http://localhost:3000/bookings/deleted/5a1db4c3-1884-4114-aac9-c0d05cad97e7
//BODY:{ "deleted": true }
bookingsRouter.delete("/:id", deleteBookingsHandler); // eliminar reservas
//DELETE:http://localhost:3000/bookings/fc8d2e82-4e43-4d34-8e7e-2ed2fe0f3562

module.exports = { bookingsRouter };
