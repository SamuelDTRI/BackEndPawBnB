const {
    checkRegistration
} = require("../../controllers/CheckRegistration/checkRegistrationController.js");

const checkRegistrationHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const{ exist, userId, userRole}  = await checkRegistration(email);
        console.log(exist, userId, userRole)
        if(exist){
            res.status(200).json({ exist, userId, userRole });
        } else {
            res.status(200).json({ exist, userId, userRole });
        }
    } catch (error) {
        console.error(
        "Error al verificar el estado de registro del usuario:",
        error
        );
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    checkRegistrationHandler,
};
