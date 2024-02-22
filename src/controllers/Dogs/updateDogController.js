const axios = require("axios");

const updateDog = async (req, res) => {
  const { dogId } = req.params;

  try {
    const { data } = await axios.put(
      `http://localhost:3000/dogs/${dogId}`,
      req.body
    );
    return data;
  } catch (error) {
    console.error("Error al actualizar el perro:", error);
    throw new Error("Error interno del servidor");
  }
};

module.exports = {
  updateDog,
};
