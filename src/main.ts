import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

// app expresss
const app = express();


// variables
app.set("enviroment",process.env.ENVIROMENT)
app.set("port",process.env.SERVER_PORT || 5000)
app.set("statics",path.resolve(__dirname, './presentation/dist'))


  
  
//middelwares
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(app.get("statics")));
  



//api routes
import router from "./infrastructure/http/routes/index";
app.use("/api", router);
 

//graphql
/* import { setupGraphQL } from "./graphql/graphql";
setupGraphQL(app);
 */

  
// Para cualquier otra ruta enviar el index.html de react
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(app.get("statics"), 'index.html'));
});



//middleware exceptions
import {exceptionHandler} from "./infrastructure/http/middlewares/exception.middleware";
app.use(exceptionHandler)
 
 

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en ${
    app.get("enviroment") == "dev" 
    ? process.env.SERVER_DOMAIN : process.env.SERVER_PROD_DOMAIN
}:${app.get("port")}`);
});

