import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
/* import { errorHandler } from "./middlewares/errors.middleware";
import apiRouter from "./routes/routes"; */

import dotenv from "dotenv";
//import apiRouter from "./api/routes/routes";


//dotenv
dotenv.config();

const app = express();

app.set("enviroment",process.env.ENVIROMENT)


app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/api", apiRouter);


  const staticPath = path.resolve(__dirname, '../frontend/dist')
  
  // Configurar Express para servir los archivos estáticos
  app.use(express.static(staticPath))
  

import { setupGraphQL } from "./graphql/graphql";
setupGraphQL(app);


  // Para cualquier otra ruta, enviar el index.html de React
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});


import {errorHandler} from "./api/middlewares/errors.middleware";
app.use(errorHandler)

const PORT = process.env.SERVER_PORT || 5000;
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${
    app.get("enviroment") == "dev" 
    ? process.env.SERVER_DOMAIN : process.env.SERVER_PROD_DOMAIN
}:${PORT}`);
});

