import mongoose from "mongoose";

const ToolsSchema = mongoose.Schema(
    {
        operario:Number,
        maquina:String,
        hInicial: Number,
        hFinal: Number,
        referencia:String,
        paradasMayores:String,
        observaciones:String
    }
)

const Tools = mongoose.model("Tool", ToolsSchema);

export default Tools;