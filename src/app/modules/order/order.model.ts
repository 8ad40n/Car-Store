import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({

    email: {
        type: String,
        required: [true, "The email address is required."],
        minlength: [5, "The email address must be at least 5 characters long."],
        maxlength: [100, "The email address must not exceed 100 characters."],
        match: [/\S+@\S+\.\S+/, "The email address is not valid."]
    },
    car:{
        type: String,
        required: [true, "The car is required."],
        minlength: [2, "The car must be at least 2 characters long."],
        maxlength: [100, "The car must not exceed 100 characters."]
    },
    quantity: {
        type: Number,
        required: [true, "The quantity is required."],
        min: [1, "The quantity must be at least 1."],
    },
    totalPrice:{
        type: Number,
        required: [true, "The total price is required."],
        min: [0, "The total price must be at least 0."],
    }

},
{
    timestamps: true,
});

export const OrderModel = model<Order>("Order", orderSchema)