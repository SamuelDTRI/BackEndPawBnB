const { DogSitters, Owners } = require("../../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const createSitters = async (name, surName, phone, email, password) => {
  // controlamos que los campos obligatorios en el modelo Owners estén presentes.
  if (!email) {
    throw new Error("Envía la información completa por favor");
  }
  // Verificamos que el usuario no esta ya registrado como cliente con el email que nos llega por req.
  const existingOwner = await Owners.findOne({ where: { email } });
  if (existingOwner) {
    throw new Error("Ya tines una cuenta registrada como cliente.");
  }
  // Verificamos que no exista un Owner ya registrado con el email que nos llega por req.
  const existingUser = await DogSitters.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Ya existe una cuenta registrada como cuidador.");
  }
  // Una vez aprobado el Owner y la contraseña, la encriptamos usando una función hash.
  // const hashedPassword = await bcrypt.hash(password, 10);
  // Se crea el registro del Owner en la base de datos con los datos de la req y la contraseña hasheada.
  const createdSitter = await DogSitters.create({
    name,
    surName,
    phone,
    email,
    password,
    photos: [],
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
    to: email,
    subject: "¡Bienvenido a PawBnB!",
    html: `
      <h1>¡Hola ${name}!</h1>
      <p>Te damos la bienvenida a PawBnB como cuidador. Estamos emocionados de tener a alguien tan apasionado por los perros en nuestra plataforma.</p>
      <p>Gracias,</p>
      <p>El equipo de PawBnB</p>
      <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });

  return createdSitter;
};

module.exports = { createSitters };
