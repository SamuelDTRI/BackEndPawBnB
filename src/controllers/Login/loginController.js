const { DogSitters } = require("../../db");
const bcrypt = require("bcrypt");

const loginUser = async ({ email, password }) => {
  // Verificar si los campos obligatorios están presentes
    console.log(email, password)
    if (!email || !password) {
        return {
        success: false,
        message: "Por favor, complete todos los campos.",
        };
    }
    try {
        // Buscar al usuario en la base de datos
        const findUser = await DogSitters.findOne({ where: { email } });
        if (!findUser) {
            return {
                success: false,
                message: "Correo electrónico no encontrado.",
            };
        }
        // Validar la contraseña
        // const validatePass = await bcrypt.compare(password, findUser.password);
        if (password !== findUser.password) {
            return {
                success: false,
                message:
                "Contraseña incorrecta. Por favor, verifique su contraseña e intente de nuevo.",
            };
        }
        // Generar el token JWT
        // const token = jwt.sign({ id: findUser.id, email }, JWT_SECRET);
        return {
            success: true,
            message: "Inicio de sesión exitoso.",
            userId: findUser.dataValues.id,
            userRole: findUser.dataValues.role,
        };
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error);
        return {
            success: false,
            message:
                "Se produjo un error al procesar el inicio de sesión. Por favor, inténtelo de nuevo más tarde.",
        };
    }
};

module.exports = { loginUser };
