import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Tools from './models/data.model.js';
import dataRoute from './routes/data.route.js';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/data",dataRoute);
// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});



// Conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("¡Conexión exitosa a la base de datos!");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
  }
};
connectDB();


// Puerto en el que el servidor va a
const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
