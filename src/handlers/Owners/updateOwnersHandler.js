const {
  updateOwner,
} = require("../../controllers/Owners/updateOwnersController.js");

const updateOwnerHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    surName,
    city,
    email,
    address,
    neighborhood,
    phone,
    password,
    photo,
  } = req.body;
  try {
    const response = await updateOwner(
      id,
      name,
      surName,
      city,
      email,
      address,
      neighborhood,
      phone,
      password,
      photo
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateOwnerHandler };
