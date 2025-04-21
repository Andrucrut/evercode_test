import { Router } from "express";
import {
    generateRandomNumber,
    getRandomNumberById
} from "../controllers/randomController";

const router = Router();

router.post("/generate", generateRandomNumber);
router.get("/retrieve/:id", getRandomNumberById)

export default router;
