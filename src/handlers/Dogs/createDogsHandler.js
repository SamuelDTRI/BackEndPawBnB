const {
  createDogsController,
} = require("../../controllers/Dogs/createDogsController");

const createDogsHandler = async (req, res) => {
  const {
    name,
    breed,
    dateOfBirth,
    gender,
    description,
    feedingInstructions,
    allergies,
    medication,
    medicalCondition,
    vaccination,
    behavior,
    ownerId,
  } = req.body;
  try {
    const response = await createDogsController(
      name,
      breed,
      gender,
      dateOfBirth,
      description,
      feedingInstructions,
      allergies,
      medication,
      medicalCondition,
      vaccination,
      behavior,
      ownerId
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createDogsHandler };
