import Tools from "../models/data.model.js"; 

// Obtener datos
export const getDataProduction = async (req, res) => {
    try {
        const tools = await Tools.find();
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

// Obtener datos por id
export const getDataProductionById = async (req, res) => {
    try {
        const tools = await Tools.findById(req.params.id);
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

// Crear datos
export const createDataProduction = async (req, res) => {
    try {
        const tools = await Tools.create(req.body);
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

// Actualizar datos
export const updateData = async (req, res) => {
    try {
        const tools = await Tools.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

// Eliminar dato por id
export const deleteData = async (req, res) => {
    try {
        const tools = await Tools.findByIdAndDelete(req.params.id);
        res.status(200).json(tools);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}
