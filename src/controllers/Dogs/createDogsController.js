const { Dogs, Owners } = require("../../db");
const nodemailer = require("nodemailer");

const createDogsController = async (
  name,
  breed,
  gender,
  dateOfBirth,
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
      gender,
      dateOfBirth,
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
        subject: "Creación de nuevo perro",
        html: `
          <h1>¡Hola ${owner.name}!</h1>
          <p>Te informamos que has creado un nuevo perro en tu cuenta. Aquí están los detalles:</p>
          <p>Nombre: ${name}</p>
          <p>Raza: ${breed}</p>
          <p>Fecha de nacimiento: ${dateOfBirth}</p>
          <p>Genero: ${gender}</p>
          <p>Descripción: ${description}</p>
          <p>Instrucciones de alimentación: ${feedingInstructions}</p>
          <p>Alergias: ${allergies}</p>
          <p>Medicación: ${medication}</p>
          <p>Condición médica: ${medicalCondition}</p>
          <p>Vacunación: ${vaccination}</p>
          <p>Comportamiento: ${behavior}</p>
          <p>Si no has realizado esta acción o necesitas más información, por favor, no dudes en contactarnos.</p>
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
    }
    return createdDog;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createDogsController };
