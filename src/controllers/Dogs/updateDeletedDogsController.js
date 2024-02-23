const { Dogs, Owners } = require("../../db");
const nodemailer = require("nodemailer");

const updateDeletedDogsController = async (id, deleted) => {
  const updateDogs = await Dogs.findByPk(id);

  if (!updateDogs) {
    throw new Error("Perro no encontrado");
  }

  updateDogs.deleted = deleted;
  await updateDogs.save();

  const owner = await Owners.findByPk(updateDogs.ownerId);
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
      subject: "Notificación de suspensión de perro",
      html: `
        <h1>¡Hola ${owner.name}!</h1>
        <p>Te informamos que tu perro ${updateDogs.name} ha sido suspendido en nuestra plataforma. Esto puede ser debido a que ha infringido una de nuestras normas. Si tienes alguna pregunta o necesitas más información, por favor, no dudes en contactarnos.</p>
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

  const updateDogsOk = await Dogs.findByPk(id);
  return updateDogsOk;
};

module.exports = { updateDeletedDogsController };
