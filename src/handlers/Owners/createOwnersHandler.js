const {
  createOwnersController,
} = require("../../controllers/Owners/createOwnersController");

const createOwnersHandler = async (req,res) => {
  try {
    const owner = await createOwnersController(req.body);
    res.status(201).json(response);
    if (success) {
      res.status(200).json({ message, owner });
    } else {
      res.status(500).json({ success, error: message });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { createOwnersHandler };
