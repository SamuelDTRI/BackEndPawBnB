const nodemailer = require("nodemailer");
const { Owners } = require("../../db");

const updateOwner = async (
  id,
  name,
  surName,
  city,
  email,
  address,
  neighborhood,
  phone,
  password,
  photo
) => {
  // verificamos que exista un usuario que corresponda a esa id
  const findOwner = await Owners.findOne({ where: { id } });
  if (!findOwner) {
    throw new Error("Usuario no encontrado.");
  }
  // actualizamos la información en la base de datos
  await Owners.update(
    {
      name: name ? name : findOwner.name,
      surName: surName ? surName : findOwner.surName,
      city: city ? city : findOwner.city,
      email: email ? email : findOwner.email,
      address: address ? address : findOwner.address,
      phone: phone ? phone : findOwner.phone,
      password: password ? password : findOwner.password,
      photo: photo ? photo : findOwner.photo,
      neighborhood: neighborhood ? neighborhood : findOwner.neighborhood,
    },
    {
      where: { id },
    }
  );

  const updatedOwner = await Owners.findOne({ where: { id } });

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pawbnb45@gmail.com",
      pass: "vvxf xvmb qebz qglj",
    },
  });

  let mailOptions = {
    from: "pawbnb45@gmail.com",
    to: email ? email : findOwner.email,
    subject: "Notificación de actualización de perfil",
    html: `
    <img src="https://res.cloudinary.com/dlazmxpqm/image/upload/v1707404152/imagesPawBnB/d4urgnpnsgoyxv11rs0b.jpg" alt="Logo de Pawbnb" style="width: 200px;">
      <h1>¡Hola ${name ? name : updatedOwner.name}!</h1>
      <p>Te informamos que tu perfil ha sido actualizado. Si no has realizado estos cambios o necesitas más información, por favor, no dudes en contactarnos.</p>
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

  return updatedOwner;
};

module.exports = { updateOwner };
