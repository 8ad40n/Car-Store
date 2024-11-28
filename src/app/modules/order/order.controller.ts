import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response)=>{
    try{
        const order = req.body;
        const result = await OrderService.orderCreate(order);
        res.status(200).send({
            success: true,
            message: "Order created successfully",
            data: result
        });
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: `Something went wrong: ${error}`
        });
    }
};

const calRevenue = async (req: Request, res: Response)=>{
    try{
        const result = await OrderService.revenue();
        res.status(200).send({
            success: true,
            message: "Revenue calculated successfully",
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


export const OrderController = {
    createOrder,
    calRevenue,
}