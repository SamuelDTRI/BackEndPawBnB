const { Bookings,Dogs,Owners } = require("../../db");
const DogsModel = require("../../models/DogsModel");
const OwnersModel = require("../../models/OwnersModel");

const getAllBookingsController = async () => {
  const getAllBookings = await Bookings.findAll({
    include: [
      {
        model: Dogs,
      },
      {
        model: Owners,
      }
    ]
  });
  return getAllBookings;
};

module.exports = { getAllBookingsController };

