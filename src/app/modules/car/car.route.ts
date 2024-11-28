import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post("/cars", CarController.createCar);
router.get("/cars", CarController.getAllCars);
router.get("/cars/:carId", CarController.getCarById);

export const CarRoutes = router;