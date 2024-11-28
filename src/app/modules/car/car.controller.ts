import { Request, Response } from "express";
import { CarService } from "./car.service";

const createCar = async (req: Request, res: Response)=>{
    try{
        const car = req.body;
        const result = await CarService.createCarIntoDB(car);

        res.status(200).send({
            success: true,
            message: "Car created successfully",
            data: result
        });

    }
    catch(error){
        res.status(500).send({
            success: false,
            message: `Something went wrong: ${error}`
        });
    }
}

const getAllCars = async (req: Request, res: Response)=>{
    try{
        const result = await CarService.getAllCars();
        res.status(200).send({
            success: true,
            message: "Cars retrieved successfully",
            data: result
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: `Something went wrong: ${error}`
        });
    }
}

const getCarById = async (req: Request, res: Response) => {
    try {
        const carID = req.params.carId;
        const result = await CarService.getCarById(carID);

        if (!result) {
            res.status(404).send({
                success: false,
                message: "Car not found.",
            });
        }
        res.status(200).send({
            success: true,
            message: "Car retrieved successfully.",
            data: result,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: `Something went wrong: ${error}`
        });
    }
};
export const CarController = {
    createCar,
    getAllCars,
    getCarById,
}