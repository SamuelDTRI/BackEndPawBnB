const nodemailer = require("nodemailer");
const { Owners, DogSitters } = require("../../db");
const bcrypt = require("bcrypt");

const createOwnersController = async (
  name,
  surName,
  phone,
  email,
  password
) => {
  // controlamos que los campos obligatorios en el modelo Owners estén presentes.
  if (!name || !surName || !phone || !email || !password) {
    throw new Error("Por favor, complete todos los campos.");
  }
  // Verificamos que el usuario no esta ya registrado como cuidador con el email que nos llega por req.
  const existingSitter = await DogSitters.findOne({ where: { email } });
  if (existingSitter) {
    throw new Error("Ya tines una cuenta registrada como cuidador.");
  }
  // Verificamos que no exista un Owner ya registrado con el email que nos llega por req.
  const existingUser = await Owners.findOne({ where: { email } });
  if (existingUser) {
    throw new Error(
      "Ya existe un usuario registrado con este correo electrónico."
    );
  }
  // Una vez aprobado el Owner y la contraseña, la encriptamos usando una función hash.
  // const hashedPassword = await bcrypt.hash(password, 10);
  // Se crea el registro del Owner en la base de datos con los datos de la req y la contraseña hasheada.
  const createOwners = await Owners.create({
    name,
    surName,
    phone,
    email,
    password,
  });
  // Implementamos la funcionalidad de notificación por email del registro del usuario.
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
