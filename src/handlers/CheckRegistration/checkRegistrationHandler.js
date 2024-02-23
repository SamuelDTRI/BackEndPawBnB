const {
    checkRegistration
} = require("../../controllers/CheckRegistration/checkRegistrationController.js");

const checkRegistrationHandler = async (req, res) => {
    try {
        const { email } = req.query;
        const{ exist, checkId, checkRole,checkDeleted}  = await checkRegistration(email);
        console.log(exist, checkId, checkRole)
        if(exist){
            res.status(200).json({ exist, checkId, checkRole, checkDeleted });
        } else {
            res.status(200).json({ exist, checkId, checkRole, checkDeleted });
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
