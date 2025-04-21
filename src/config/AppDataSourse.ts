import "reflect-metadata";
import { DataSource } from "typeorm";
import { RandomNumber } from "../models/RandomNumber";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
    logging: true,
    entities: [RandomNumber],
    migrations: [],
    subscribers: [],
});
