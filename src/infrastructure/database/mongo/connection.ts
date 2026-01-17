import mongoose from "mongoose";

/*  
import { initializeRoles } from "./scripts/roles"; */
mongoose
  .connect(
     process.env.ENVIROMENT == "dev" ? 
     String(process.env.MONGODB_URI) : "mongodb+srv://pepelepu23:79AZ7W7D5VYlcW36@cluster0.pv1rna4.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("Conexión a MongoDB establecida con éxito");

    // Iniciar el servidor
    /* server.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`)
      console.log(`Socket.IO escuchando.`)
      console.log(`Frontend disponible en http://localhost:${PORT}`)
    }) */

     // initializeRoles().then(()=>{console.log("reoles creados")}).catch(err => console.error(err));

  })
  .catch((err: any) => {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  });
