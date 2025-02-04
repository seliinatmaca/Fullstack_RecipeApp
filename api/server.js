import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipeRoutes.js";

//express kurulumu
const app = express();
const port = 4004;

//cors hatalarını önleyen mz (oto header ekler)
app.use(cors());

// bodyde ki json verilerini çeviren
app.use(express.json());

//tarifler için crud operasyonlarını gerçekleştirebileceğimiz endpointleri tanımla
app.use(recipeRouter);

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı`);
});
