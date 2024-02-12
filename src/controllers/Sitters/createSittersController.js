const { DogSitters, Owners } = require("../../db");
const bcrypt = require("bcrypt");

const createSitters = async (name, surName, phone, email, password) => {
  // controlamos que los campos obligatorios en el modelo Owners estén presentes.
  if (!name || !surName || !phone || !email || !password) {
    throw new Error("Envia la informacion completa por favor");
  }
  // Verificamos que el usuario no esta ya registrado como cliente con el email que nos llega por req.
  const existingOwner = await Owners.findOne({ where: { email } });
  if (existingOwner) {
    throw new Error("Ya tines una cuenta registrada como cliente.");
  }
  // Verificamos que no exista un Owner ya registrado con el email que nos llega por req.
  const existingUser = await DogSitters.findOne({ where: { email } });
  if (existingUser) {
    throw new Error(
      "Ya existe un usuario registrado con este correo electrónico."
    );
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
  });
  console.log(createdSitter);
  return createdSitter;
};

module.exports = { createSitters };
