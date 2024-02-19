/* const nodemailer = require("nodemailer"); */
const { Dogs, Owners } = require("../../db");

const createDogsController = async (
  name,
  breed,
  dateOfBirth,
  gender,
  description,
  feedingInstructions,
  allergies,
  medication,
  medicalCondition,
  vaccination,
  behavior,
  ownerId
) => {
  try {
    const createdDog = await Dogs.create({
      name,
      breed,
      dateOfBirth,
      gender,
      description,
      feedingInstructions,
      allergies,
      medication,
      medicalCondition,
      vaccination,
      behavior,
      ownerId,
    });

    const owner = await Owners.findByPk(ownerId);
    if (owner) {
      await owner.addDog(createdDog);
    }
    return createdDog;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createDogsController };

/* 
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
    subject: "¡Bienvenido a Pawbnb!",
    html: `
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
      </div>
      <h1>¡Hola ${owner.name}!</h1>
      <p>Estamos emocionados de darte la bienvenida a Pawbnb. Es un placer para nosotros que hayas decidido usar nuestros servicios para el cuidado de tu perro ${createDogs.name}.</p>
      <p>En Pawbnb, nos esforzamos por proporcionar la mejor experiencia posible para ti y tu mascota. Nuestro objetivo es asegurarnos de que tu perro esté seguro, cómodo y feliz mientras está bajo el cuidado de nuestros cuidadores de perros profesionales.</p>
      <p>Si tienes alguna pregunta o necesitas ayuda con algo, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
      <p>¡Esperamos que tú y ${createDogs.name} disfruten de la experiencia Pawbnb!</p>
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
  }); */
