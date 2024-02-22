const { Dogs, Owners } = require("../../db");
const nodemailer = require("nodemailer");

const deleteDogsController = async (id) => {
  const deleteDogs = await Dogs.findOne({ where: { id } });

  if (!deleteDogs) {
    throw new Error("Reserva no encontrada");
  }

  const owner = await Owners.findByPk(deleteDogs.ownerId);
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
      subject: "Notificación de eliminación de perro",
      html: `
        <h1>¡Hola ${owner.name}!</h1>
        <p>Te informamos que tu perro ${deleteDogs.name} ha sido eliminado de tu cuenta. Si no has realizado esta acción o necesitas más información, por favor, no dudes en contactarnos.</p>
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

  await deleteDogs.destroy();
  return deleteDogs;
};

module.exports = { deleteDogsController };
