const { Admin } = require("../../db");

const getAdminInfo = async (id) => {
    const existingAdmin = await Admin.findByPk(id);
    if (!existingAdmin) {
        throw error(`No existe un administrador con este id: ${id}`);
    }
    return existingAdmin;
};

module.exports = { getAdminInfo };
