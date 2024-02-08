const {
  createDogsController,
} = require("../../controllers/Dogs/createDogsController");

const createDogsHandler = async (req, res) => {
  const {
    name,
    race,
    gender,
    description,
    feedingInstructions,
    allergies,
    medicines,
    medicalCondition,
    behavior,
    vaccination,
    ownerId
  } = req.body;
  try {
    const response = await createDogsController(
      name,
      race,
      gender,
      description,
      feedingInstructions,
      allergies,
      medicines,
      medicalCondition,
      behavior,
      vaccination,
      ownerId
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createDogsHandler };
