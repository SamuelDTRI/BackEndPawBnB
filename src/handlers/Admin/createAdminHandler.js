const {createAdminController} = require("../../controllers/Admin/createAdminController.js");
const createAdminHandler = async (req, res) => {
    const { name, surName, phone, email, password } = req.body;
    try {
        const response = await createAdminController(
        name,
        surName,
        phone,
        email,
        password
        );
        res.status(201).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { createAdminHandler };