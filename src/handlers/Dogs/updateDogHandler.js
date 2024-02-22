const { updateDog } = require("../../controllers/Dogs/updateDogController");

const updateDogHandler = async (req, res) => {
  try {
    const updatedData = await updateDog(req, res);

    res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error en el manejador de actualización del perro:", error);
    res.status(500).send("Error interno del servidor");
  }
};

module.exports = {
  updateDogHandler,
};
