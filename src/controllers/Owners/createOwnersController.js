const nodemailer = require("nodemailer");
const { Owners } = require("../../db");

const createOwnersController = async (
  name,
  surName,
  zipcode,
  city,
  email,
  password,
  address,
  role,
  phone,
  photo
) => {
  const createOwners = await Owners.create({
    name,
    surName,
    zipcode,
    city,
    email,
    password,
    address,
    role,
    phone,
    photo,
  });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pawbnb45@gmail.com",
      pass: "vvxf xvmb qebz qglj",
    },
  });

  let mailOptions = {
    from: "pawbnb45@gmail.com",
    to: createOwners.email,
    subject: "¡Bienvenido a Pawbnb!",
    html: `
      <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
      </div>
      <h1>¡Hola ${createOwners.name} ${createOwners.surName}!</h1>
      <p>Estamos emocionados de darte la bienvenida a Pawbnb. Es un placer para nosotros que hayas decidido usar nuestros servicios para encontrar el cuidador perfecto para tu perro.</p>
      <p>En Pawbnb, nos esforzamos por proporcionar la mejor experiencia posible para ti y tu mascota. Nuestro objetivo es asegurarnos de que encuentres el cuidador de perros ideal que se adapte a las necesidades de tu perro.</p>
      <p>Si tienes alguna pregunta o necesitas ayuda con algo, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
      <p>¡Esperamos que disfrutes de la experiencia Pawbnb!</p>
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

  return createOwners;
};

module.exports = { createOwnersController };
