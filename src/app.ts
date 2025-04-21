import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/AppDataSourse";
import randomRouter from "./routes/randomRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", randomRouter);

// Инициализация базы данных
AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error("Database connection failed", error);
    });
