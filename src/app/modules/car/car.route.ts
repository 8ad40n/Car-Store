import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post("/cars", CarController.createCar);
router.get("/cars", CarController.getAllCars);
router.get("/cars/:carId", CarController.getCarById);
router.put("/cars/:carId", CarController.updateCar);
router.delete("/cars/:carId", CarController.deleteCar);

export const CarRoutes = router;