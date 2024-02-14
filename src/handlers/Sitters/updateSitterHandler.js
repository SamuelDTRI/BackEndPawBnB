const {
  updateSitter,
} = require("../../controllers/Sitters/updateSitterController.js");

const updateSitterHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    surName,
    phone,
    description,
    dateOfBirth,
    email,
    password,
    address,
    neighborhood,
    city,
    rates,
  } = req.body;
  try {
    const response = await updateSitter(
      id,
      name,
      surName,
      phone,
      description,
      dateOfBirth,
      email,
      password,
      address,
      neighborhood,
      city,
      rates
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateSitterHandler };
