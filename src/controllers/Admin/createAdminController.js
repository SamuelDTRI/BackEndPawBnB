const {Admin} = require("../../db.js")

const createAdminController = async (
  name,
  surName,
  phone,
  email,
  password
) => {
  // controlamos que los campos obligatorios en el modelo Owners estén presentes.
  if (!email) {
    throw new Error("Por favor, complete todos los campos.");
  }
  // Verificamos que el usuario no esta ya registrado como admin con el email que nos llega por req.
  const existingSitter = await Admin.findOne({ where: { email } });
  if (existingSitter) {
    throw new Error("Ya tines una cuenta registrada como cuidador.");
  }
  // Una vez aprobado el Owner y la contraseña, la encriptamos usando una función hash.
  // const hashedPassword = await bcrypt.hash(password, 10);
  // Se crea el registro del Owner en la base de datos con los datos de la req y la contraseña hasheada.
  const createdAdmin = await Admin.create({
    name,
    surName,
    phone,
    email,
    password,
  });
  return createdAdmin;
};

module.exports = { createAdminController };
