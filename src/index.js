import express from 'express';
import mongoose from 'mongoose';
import Tools from './models/tools.model.js';

const app = express();
app.use(express.json());

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://gypelcaballo:bitcoin2020@registertools.8aiohya.mongodb.net/registrosDeHerramientas", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("¡Conexión exitosa a la base de datos!");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
  }
};
connectDB();

app.get('/api/tools', async (req, res) => {
  try {
    const tools = await Tools.find();
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({message:error.message})
    console.log(error)
  }
})

app.post('/api/tools',async(req,res)=>{
  try {
   const ToolsRegister= await Tools.create(req.body);
   res.status(200).json(ToolsRegister);
  } catch (error) {
    res.status(500).json({message:error.message})
    console.log(error)
  }
})

app.get('/api/tools/:id', async (req, res) => { 
  try {
    const tools = await Tools.findById(req.params.id);
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({message:error.message})
    console.log(error)
  }
})

app.put('/api/tools/:id', async (req, res) => {
  try {
    const tools = await Tools.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({message:error.message})
    console.log(error)
  }
})

app.delete('/api/tools/:id', async (req, res) => {
  try {
    const tools = await Tools.findByIdAndDelete(req.params.id);
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({message:error.message})
    console.log(error)
  }
})




// Puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
