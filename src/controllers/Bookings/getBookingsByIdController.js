const { Bookings,Dogs,Owners } = require("../../db");

const getBookingsByIdController = async (id) => {
  const bookingId = await Bookings.findByPk(id, {
    include: [{
    model: Dogs,    
    },
    {
      model: Owners,
    }
  ]
});
  return bookingId;
};
module.exports = { getBookingsByIdController };
