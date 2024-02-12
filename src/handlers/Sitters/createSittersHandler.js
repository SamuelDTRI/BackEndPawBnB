const {
  createSitters,
} = require("../../controllers/Sitters/createSittersController");

const createSittersHandler = async (req, res) => {
  const { name, surName, phone, email, password } = req.body;
  try {
    const response = await createSitters(name, surName, phone, email, password);
    res.status(201).json(response)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createSittersHandler };
