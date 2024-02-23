const { DogSitters } = require("../../db");
const nodemailer = require("nodemailer");

const deleteSittersController = async (id) => {
  const deleteSitters = await DogSitters.findByPk(id);

  if (!deleteSitters) {
    throw new Error("No existe un sitter con ese id");
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
    to: deleteSitters.email,
    subject: "Eliminación de cuenta",
    html: `
      <h1>¡Hola ${deleteSitters.name}!</h1>
      <p>Te informamos que tu cuenta en PawBnB ha sido eliminada debido a la infracción de nuestras normas y políticas de privacidad. Si tienes alguna pregunta o necesitas más información, por favor, no dudes en contactarnos.</p>
      <p>Lamentamos cualquier inconveniente que esto pueda causarte y agradecemos tu comprensión.</p>
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

  await deleteSitters.destroy();
  return deleteSitters;
};

module.exports = { deleteSittersController };
