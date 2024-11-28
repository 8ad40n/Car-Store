import mongoose from "mongoose";
import { Car } from "./car.interface";
import { CarModel } from "./car.model";

const createCarIntoDB = async (car: Car) => {
    const result = await CarModel.create(car);
    return result;
};

const getAllCars = async () => {
    const result = await CarModel.find();
    return result;
};

const getCarById = async (id: string) => {
    const newId = new mongoose.Types.ObjectId(id);
    const result = await CarModel.findById(newId);
    return result;
};

const updateCar = async (id: string ,updatedData: Partial<Car>) =>{
    const newID = new mongoose.Types.ObjectId(id);
    const result = await CarModel.findByIdAndUpdate(newID, updatedData, {new: true});
    return result;   
}

const deleteCar = async (id: string) => {
    const newID = new mongoose.Types.ObjectId(id);
    const result = await CarModel.findByIdAndDelete(newID, {new: true});
    return result;
}

export const CarService = {
    createCarIntoDB,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
}