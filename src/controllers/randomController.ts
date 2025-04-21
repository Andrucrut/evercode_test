import { Request, Response } from "express";
import { AppDataSource } from "../config/AppDataSourse";
import { RandomNumber } from "../models/RandomNumber";

const repo = AppDataSource.getRepository(RandomNumber);

export const generateRandomNumber = async (req: Request, res: Response) => {
    const randomValue = Math.floor(Math.random() * 1000) + 1;
    const number = repo.create({ value: randomValue });
    const saved = await repo.save(number);
    res.status(201).json(saved);
};

export const getRandomNumberById = async (req: Request, res: Response): Promise<any> => {
    try {
        const randomNumber = await repo.findOne({ where: { id: Number(req.params.id) } });

        if (!randomNumber) {
            return res.status(404).json({ message: "Random number not found" });
        }

        res.json(randomNumber);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};