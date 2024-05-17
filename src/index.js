import express from 'express';
import mongoose from 'mongoose';
import Tools from './models/data.model.js';
import dataRoute from './routes/data.route.js';
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/data",dataRoute);


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


// Puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
