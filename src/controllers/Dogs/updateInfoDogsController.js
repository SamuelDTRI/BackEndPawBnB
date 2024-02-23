const { Dogs, Owners } = require("../../db");
const nodemailer = require("nodemailer");

const updateInfoDogsController = async (
  id,
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
  behavior
) => {
  const DogsUpdate = await Dogs.findByPk(id);

  await Dogs.update(
    {
      name: name ? name : DogsUpdate.name,
      breed: breed ? breed : DogsUpdate.breed,
      dateOfBirth: dateOfBirth ? dateOfBirth : DogsUpdate.dateOfBirth,
      gender: gender ? gender : DogsUpdate.gender,
      description: description ? description : DogsUpdate.description,
      feedingInstructions: feedingInstructions
        ? feedingInstructions
        : DogsUpdate.feedingInstructions,
      allergies: allergies ? allergies : DogsUpdate.allergies,
      medication: medication ? medication : DogsUpdate.medication,
      medicalCondition: medicalCondition
        ? medicalCondition
        : DogsUpdate.medicalCondition,
      vaccination: vaccination ? vaccination : DogsUpdate.vaccination,
      behavior: behavior ? behavior : DogsUpdate.behavior,
    },
    {
      where: { id },
    }
  );

  const updatedDog = await Dogs.findOne({ where: { id } });

  const owner = await Owners.findByPk(updatedDog.ownerId);
  if (owner) {
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
      subject: "Actualización de datos de perro",
      html: `
        <h1>¡Hola ${owner.name}!</h1>
        <p>Te informamos que los datos de tu perro ${updatedDog.name} han sido actualizados correctamente. Si no has realizado estos cambios o necesitas más información, por favor, no dudes en contactarnos.</p>
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

  return updatedDog;
};

module.exports = { updateInfoDogsController };
