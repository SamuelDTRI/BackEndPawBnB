const {
  updateInfoDogsController,
} = require("../../controllers/Dogs/updateInfoDogsController");

const updateInfoDogsHandler = async (req, res) => {
  const { id } = req.params;
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
  } = req.body;
  try {
    const response = await updateInfoDogsController(
      id,
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
      behavior
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateInfoDogsHandler };
