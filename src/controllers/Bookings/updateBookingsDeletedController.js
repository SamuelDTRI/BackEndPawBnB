const { Bookings } = require("../../db");

const updateBookingsDeletedController = async (id, deleted) => {
  const booking = await Bookings.findByPk(id);

  if (!booking) {
    throw new Error("Reserva no encontrada");
  }

  booking.deleted = deleted;
  await booking.save();

  const updatedBooking = await Bookings.findByPk(id);

  return updatedBooking;
};

module.exports = { updateBookingsDeletedController };
