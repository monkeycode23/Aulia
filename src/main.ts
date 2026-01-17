import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// app expresss
const app = express();

dotenv.config();


// variables
app.set("enviroment",process.env.ENVIROMENT)
app.set("port",process.env.SERVER_PORT || 5000)

const staticPath = path.resolve(__dirname, './presentation/dist')
  

  //middelwares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(staticPath))
  


/* app.use("/api", apiRouter);

 */

  // Configurar Express para servir los archivos estáticos


/* import { setupGraphQL } from "./graphql/graphql";
setupGraphQL(app);
 */

  // Para cualquier otra ruta, enviar el index.html de React
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

/* 
import {errorHandler} from "./api/middlewares/errors.middleware";
app.use(errorHandler)
 */


app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en ${
    app.get("enviroment") == "dev" 
    ? process.env.SERVER_DOMAIN : process.env.SERVER_PROD_DOMAIN
}:${app.get("port")}`);
});

