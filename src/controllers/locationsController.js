const Locations = require("../models/Locations.js");
const axios = require("axios");
const { API_KEY_LOC, USER_ID_LOC } = process.env;

const getLocations = async (req, res) => {
    try {
        // primero se verifica si hay datos en el modelo locations de la base de datos
        const existingLocations = await Locations.findAll();
        if (existingLocations.length === 0) {
            //si esta vacío se hace una 1ª llamada a la api que trae un objeto que contiene un  listado de ubicaciones
            const apiResponse = await axios.get(
                `https://ezcmd.com/apps/api_ezhigh/get_hierarchy/${API_KEY_LOC}/${USER_ID_LOC}?country_code=AR&parent_id=3433955&level=3`
            );
            const locationsFromApi = apiResponse.data;
            const filteredLocationData = [];
            //
            for (const key in locationsFromApi) {
                // filtramos el objeto para quedarnos con los datos para la segunda llamada a la api
                if (/^\d+$/.test(key)) {
                    const {id} = locationsFromApi[key];
                    //por cada ubicación de la primera lista se pide a la api el listado de ubicaciones dependientes
                    const apiResponse = await axios.get(
                        `https://ezcmd.com/apps/api_ezhigh/get_hierarchy/${API_KEY_LOC}/${USER_ID_LOC}?country_code=AR&parent_id=${id}&level=3`
                    );
                    const locationData = apiResponse.data;
                    //de la respuesta obtenida filtramos los datos necesarios y generamos nuestro propio listado de ubicaciones
                    for (const key in locationData) {
                            if (/^\d+$/.test(key)) {
                                const location = {
                                    locationID: locationData[key].id,
                                    name: locationData[key].label,
                                    latitude: locationData[key].lat,
                                    longitude: locationData[key].long,
                                };
                                filteredLocationData.push(location);
                            };
                    };
                };
            };
            //con el listado generado se guardan los datos en la base de datos y se envía el listado como respuesta
            await Locations.bulkCreate(filteredLocationData);
            return res.json({
                success: true,
                message: "Ubicaciones obtenidas y guardadas correctamente",
                locations: filteredLocationData,
            });
        } else {
            //si hay datos guardados en la base de datos se los envía en la respuesta
            return res.json({
            success: true,
            message: "Ubicaciones existentes en la base de datos",
            locations: existingLocations,
            });
        };
    } catch (error) {
        console.error("Error al obtener y guardar ubicaciones:", error);
        return res
            .status(500)
            .json({
                success: false,
                error: "Hubo un error al procesar su solicitud",
            });
    }
};

module.exports = getLocations;
