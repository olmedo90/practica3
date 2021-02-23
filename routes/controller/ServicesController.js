
class ServicesController {
    constructor() {}index(req, res) {
    res.status(200).json({ serverResponse: "hola mundo" });
    }
    }
    export default ServicesController;