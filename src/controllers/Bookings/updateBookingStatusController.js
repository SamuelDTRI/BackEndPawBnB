const { Bookings } = require("../../db");

const updateBookingStatusController = async (id, status) => {
  const booking = await Bookings.findOne({ where: { id } });

  if (!booking) {
    throw new Error("Reserva no encontrada");
  }

  booking.status = status;
  await booking.save();
  return booking;
};

module.exports = { updateBookingStatusController };
