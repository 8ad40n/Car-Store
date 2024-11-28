import { Request, Response } from "express";
import { CarService } from "./car.service";

const createCar = async (req: Request, res: Response)=>{
    try{
        const car = req.body;
        const result = await CarService.createCardIntoDB(car);

        res.status(200).send({
            success: true,
            message: "Car created successfully",
            data: result
        });

    }
    catch(error){
        res.status(500).send({
            success: false,
            message: "Something went wrong"
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
            message: "Something went wrong"
        });
    }
}

export const CarController = {
    createCar,
    getAllCars,
}