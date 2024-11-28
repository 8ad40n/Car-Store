import mongoose from "mongoose";
import { CarModel } from "../car/car.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const orderCreate = async (order: Order) =>{
    const carDetails = await CarModel.findById(new mongoose.Types.ObjectId(order.car));
    if(!carDetails)
    {
        throw new Error("Car not found.");
    }
    if(carDetails.quantity < order.quantity)
    {
        throw new Error("Insufficient stock for this car.");
    }

    carDetails.quantity -= order.quantity;
    if(carDetails.quantity == 0)
    {
        carDetails.inStock = false;
    }
    await carDetails.save();

    const totalPrice = carDetails.price * order.quantity;

    const orderDetails = {
        ...order,
        totalPrice,
    }

    const result = await OrderModel.create(orderDetails);
    return result;
};

const revenue = async ()=>{
    const result = await OrderModel.aggregate(
        [
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$totalPrice",
                    }
                }
            }
        ]
    )
    return result;
}

export const OrderService = {
    orderCreate,
    revenue,

}