const nodemailer = require("nodemailer");
const { Bookings, Owners, DogSitters, Dogs } = require("../../db");

const createBookingsController = async (
  reserva 
) => {
  console.log({reserva})
  const createBookings = await Bookings.create(reserva);

  console.log({ createBookings });

  const owner = await Owners.findByPk(reserva.ownerId);
  if (!owner) {
    throw new Error(`No se encontró ningún dueño con el id ${reserva.ownerId}`);
  }

  const dogSitter = await DogSitters.findByPk(reserva.dogSitterId);
  if (!dogSitter) {
    throw new Error(`No se encontró ningún cuidador con el id ${reserva.dogSitterId}`);
  }

  const dog = await Dogs.findByPk(reserva.dogId);
  if (!dog) {
    throw new Error(`No se encontró ningún perro con el id ${reserva.dogId}`);
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pawbnb45@gmail.com",
      pass: "vvxf xvmb qebz qglj",
    },
  });

  let mailOptions = {
    from: "pawbnb45@gmail.com",
    to: owner.email,
    subject: "¡Has realizado una reserva en Pawbnb!",
    html: `
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
      </div>
      <h1>¡Hola ${owner.name}!</h1>
      <p>Has realizado una reserva para tu perro ${dog.name} con el cuidador ${dogSitter.name}. La reserva está actualmente en estado "${reserva.status}".</p>
      <p>Pronto, ${dogSitter.name} decidirá si puede cuidar a tu perro en las fechas seleccionadas. Te notificaremos tan pronto como ${dogSitter.name} haya tomado una decisión.</p>
      <p>¡Gracias por usar Pawbnb!</p>
      <p>Con cariño,</p>
      <p>El equipo de Pawbnb</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });

  return createBookings;
};

module.exports = { createBookingsController };
