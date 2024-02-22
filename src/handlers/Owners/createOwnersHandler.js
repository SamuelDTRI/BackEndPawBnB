const {
  createOwnersController,
} = require("../../controllers/Owners/createOwnersController");

const createOwnersHandler = async (req, res) => {
  const { name, surName, phone, email, password } = req.body;
  try {
    const response = await createOwnersController(
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

module.exports = { createOwnersHandler };
