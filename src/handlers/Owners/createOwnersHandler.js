const {
  createOwnersController,
} = require("../../controllers/Owners/createOwnersController");

const createOwnersHandler = async (req,res) => {
  const {
    name,
    surName,
    zipcode,
    city,
    email,
    password,
    address,
    role,
    phone,
    photo,
  } = req.body;
  try {
    const response = await createOwnersController(
      name,
      surName,
      zipcode,
      city,
      email,
      password,
      address,
      role,
      phone,
      photo
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createOwnersHandler };
