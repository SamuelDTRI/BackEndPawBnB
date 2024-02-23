const { Bookings, Owners, DogSitters } = require("../../db");
const nodemailer = require("nodemailer");

const updateBookingsDeletedController = async (id, deleted) => {
  const booking = await Bookings.findByPk(id);

  if (!booking) {
    throw new Error("Reserva no encontrada");
  }

  booking.deleted = deleted;
  await booking.save();

  const owner = await Owners.findByPk(booking.ownerId);
  const dogSitter = await DogSitters.findByPk(booking.dogSitterId);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pawbnb45@gmail.com",
      pass: "vvxf xvmb qebz qglj",
    },
  });

  let mailOptionsOwner = {
    from: "pawbnb45@gmail.com",
    to: owner.email,
    subject: "Notificación de suspensión de reserva",
    html: `
      <h1>¡Hola ${owner.name}!</h1>
      <p>Te informamos que tu reserva con el cuidador ${dogSitter.name} ha sido suspendida por incumplir nuestras normas y políticas de privacidad. Si tienes alguna pregunta o necesitas más información, por favor, no dudes en contactarnos.</p>
      <p>Gracias,</p>
      <p>El equipo de PawBnB</p>
      <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
    `,
  };

  let mailOptionsDogSitter = {
    from: "pawbnb45@gmail.com",
    to: dogSitter.email,
    subject: "Notificación de suspensión de reserva",
    html: `
      <h1>¡Hola ${dogSitter.name}!</h1>
      <p>Te informamos que la reserva con el dueño ${owner.name} ha sido suspendida por incumplir nuestras normas y políticas de privacidad. Si tienes alguna pregunta o necesitas más información, por favor, no dudes en contactarnos.</p>
      <p>Gracias,</p>
      <p>El equipo de PawBnB</p>
      <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
    `,
  };

  transporter.sendMail(mailOptionsOwner, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado al dueño: " + info.response);
    }
  });

  transporter.sendMail(mailOptionsDogSitter, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado al cuidador: " + info.response);
    }
  });

  const updatedBooking = await Bookings.findByPk(id);
  return updatedBooking;
};

module.exports = { updateBookingsDeletedController };
