const { DogSitters } = require("../../db");
const bcrypt = require("bcrypt");

const createSitters = async (
  {name,
  surName,
  phone,
  description,
  dateOfBirth,
  role,
  email,
  password,
  address,
  zipcode,
  city,
  rates,
  availability,
  photos,
  pay}
) => {
  // controlamos que los campos obligatorios en el modelo Owners estén presentes.
  if (!name || !email || !password || !role || !phone || !description || !dateOfBirth || !address || !zipcode) {
    return (response = {
      success: false,
      message: "Por favor, complete todos los campos.",
    });
  }
  // Verificamos que no exista un Owner ya registrado con el email que nos llega por req.
  const existingUser = await DogSitters.findOne({ where: { email } });
  if (existingUser) {
    return (response = {
      success: false,
      message: "Ya existe un usuario registrado con este correo electrónico.",
    });
  }
  //Verificamos que la contraseña tenga el numero correcto de caracteres.
  if (password.length < 5 || password.length > 25) {
    return (response = {
      success: false,
      message:
        "La contraseña debe tener un mínimo de 5 caracteres y un máximo de 15.",
    });
  }
  // Una vez aprobado el Owner y la contraseña, la encriptamos usando una función hash.
  const hashedPassword = await bcrypt.hash(password, 10);
  // Se crea el registro del Owner en la base de datos con los datos de la req y la contraseña hasheada.
  const createdSitter = await DogSitters.create({
    name,
    surName,
    phone,
    description,
    dateOfBirth,
    role,
    email,
    password: hashedPassword,
    address,
    zipcode,
    city,
    rates,
    availability,
    photos,
    pay,
  });
  console.log(createdSitter)
  return (response = {
    sitter: createdSitter,
    success: true,
    message: "Usuario registrado correctamente.",
  });
};

module.exports = { createSitters };
