import { Car } from "./car.interface";
import { CarModel } from "./car.model";

const createCardIntoDB = async (car: Car) => {
    const result = await CarModel.create(car);
    return result;
};

const getAllCars = async () => {
    const result = await CarModel.find();
    return result;
};

export const CarService = {
    createCardIntoDB,
    getAllCars,
    
}