const {adminLogin} = require("../../controllers/Admin/adminLoginController.js")

const adminLoginHandler = async (req, res) => {
    console.log(req.body)
    try {
        const { success, message, userId, userRole, userDeleted } = await adminLogin(req.body);
        if (success) {
        res.status(200).json({ message, userId, userRole, userDeleted });
        } else {
        res.status(401).json({ success, error: message });
        }
    } catch (error) {
        console.error("Error al procesar el inicio de sesión:", error);
        return res.status(500).json({
        message: "Se produjo un error al procesar el inicio de sesión.",
        });
    }
};

module.exports = { adminLoginHandler };