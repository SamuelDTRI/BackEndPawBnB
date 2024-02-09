const {
  createOwnersController,
} = require("../../controllers/Owners/createOwnersController");

const createOwnersHandler = async (req,res) => {

  try {
    const user = await createOwnersController(req.body);
    res.status(201).json(response);
    if (success) {
      res.status(200).json({ message, user });
    } else {
      res.status(500).json({ success, error: message });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { createOwnersHandler };
