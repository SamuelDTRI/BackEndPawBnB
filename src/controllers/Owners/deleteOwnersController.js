const nodemailer = require("nodemailer");
const { Owners } = require("../../db");

const deleteOwnersController = async (id) => {
  const deleteOwners = await Owners.findByPk(id);

  if (!deleteOwners) {
    throw new Error(`No se encontró owner con el id: ${id}`);
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
    to: deleteOwners.email,
    subject: "Notificación de eliminación de cuenta",
    html: `
    <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
      <h1>¡Hola ${deleteOwners.name}!</h1>
      <p>Te informamos que tu cuenta ha sido eliminada. Esto puede ser debido a cuestiones de seguridad de nuestra empresa o porque has infringido varias de nuestras normas. Si tienes alguna pregunta o necesitas más información, por favor, no dudes en contactarnos.</p>
      <p>Gracias,</p>
      <p>El equipo de PawBnB</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });

  deleteOwners.destroy();

  return deleteOwners;
};

module.exports = { deleteOwnersController };
