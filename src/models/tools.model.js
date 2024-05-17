import mongoose from "mongoose";

const ToolsSchema = mongoose.Schema(
    {
        title:String,
        name: String,
        description: String,

    }
)

const Tools = mongoose.model("Tool", ToolsSchema);

export default Tools;