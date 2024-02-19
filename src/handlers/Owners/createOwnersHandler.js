const {
  createOwnersController,
} = require("../../controllers/Owners/createOwnersController");

const createOwnersHandler = async (req, res) => {
  const { name, surName, phone, email, password} = req.body;
  try {
    console.log(name,surName,phone,email,password);
    const response = await createOwnersController({ //ACA ESTA EL ERROR
      name: name,
      surName: surName,
      phone: phone,
      email: email,
      password: password,
      role: 'Owner'}
    );
    console.log("YO NO FUI")
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createOwnersHandler };
