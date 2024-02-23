const nodemailer = require("nodemailer");
const { Owners } = require("../../db");

const updateDeletedOwnersController = async (id, deleted) => {
  const updateDeleted = await Owners.findByPk(id);
  if (!updateDeleted) {
    throw new Error("Owner no encontrado");
  }

  updateDeleted.deleted = deleted;
  await updateDeleted.save();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pawbnb45@gmail.com",
      pass: "vvxf xvmb qebz qglj",
    },
  });

  let mailOptions = {
    from: "pawbnb45@gmail.com",
    to: updateDeleted.email,
    subject: "Notificación de suspensión de cuenta",
    html: `
      <h1>¡Hola ${updateDeleted.name}!</h1>
      <p>Te informamos que tu cuenta ha sido suspendida. Debido a que muy posiblemente has infringido una de nuestras normas, Si tienes alguna pregunta o necesitas más información acerca de tu infraccion, por favor, no dudes en contactarnos.</p>
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

  return updateDeleted;
};

module.exports = { updateDeletedOwnersController };
