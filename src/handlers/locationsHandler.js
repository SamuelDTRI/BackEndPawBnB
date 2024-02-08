const  getLocations = require( "../controllers/locationsController.js");

const locationsHandler = async (req, res, next) => {
    try {
        const { success, message, locations } = await getLocations(req,res, next);
        if (success) {
            res.status(200).json({ message, locations });
        } else {
            res.status(500).json({ success, error: message });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports= locationsHandler;
