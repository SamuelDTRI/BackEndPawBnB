const { getAdminInfo } = require("../../controllers/Admin/getAdminInfo.js");

const getAdminInfoHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getAdminInfo(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = { getAdminInfoHandler };

