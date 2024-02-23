const { DogSitters } = require("../../db");
const nodemailer = require("nodemailer");

const deletePhotoController = async (id, index) => {
  try {
    const sitter = await DogSitters.findOne({ where: { id } });

    if (!sitter) return new Error("Cuidador no encontrado");

    const updatedPhotos = sitter.photos.filter(
      (photo, i) => i !== parseInt(index)
    );

    await DogSitters.update({ photos: updatedPhotos }, { where: { id } });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pawbnb45@gmail.com",
        pass: "vvxf xvmb qebz qglj",
      },
    });

    let mailOptions = {
      from: "pawbnb45@gmail.com",
      to: sitter.email,
      subject: "Eliminación de foto",
      html: `
        <h1>¡Hola ${sitter.name}!</h1>
        <p>Te informamos que una de tus fotos ha sido eliminada de tu perfil de cuidador en PawBnB. Si no has realizado esta acción o necesitas más información, por favor, no dudes en contactarnos.</p>
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

    return { success: true, message: "Foto eliminada con éxito" };
  } catch (error) {
    console.error("Error al eliminar la foto del cuidador:", error);
    return {
      success: false,
      message: "Error al eliminar la foto del cuidador",
    };
  }
};

module.exports = { deletePhotoController };
