import db from "./config/dbConnect.js";
import express from "express";
import routes from "./routes/index.js";
import cors from 'cors';

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());
app.use(cors())
routes(app);

export default app;