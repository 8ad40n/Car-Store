import { model, Schema } from "mongoose";
import { Car } from "./car.interface";

const carSchema = new Schema<Car>({
  id: {
    type: String,
    required: [true, "The car ID is required."],
    unique: true,
  },
  brand: {
    type: String,
    required: [true, "The car brand is required."],
    minlength: [2, "The car brand must be at least 2 characters long."],
    maxlength: [50, "The car brand must not exceed 50 characters."],
  },
  model: {
    type: String,
    required: [true, "The car model is required."],
    minlength: [2, "The car model must be at least 2 characters long."],
    maxlength: [50, "The car model must not exceed 50 characters."],
  },
  year: {
    type: Number,
    required: [true, "The car year is required."],
    min: [1886, "The car year must be at least 1886."],
    max: [new Date().getFullYear(), "The car year must not be in the future."],
  },
  price: {
    type: Number,
    required: [true, "The car price is required."],
    min: [1, "The car price must be at least $1."],
  },
  category: {
    type: String,
    required: [true, "The car category is required."],
    enum: ["SUV", "Sedan", "Hatchback", "Wagon", "Coupe"],
  },
  description: {
    type: String,
    required: [true, "The car description is required."],
    minlength: [20, "The car description must be at least 20 characters long."],
    maxlength: [500, "The car description must not exceed 500 characters."],
  },
  quantity: {
    type: Number,
    required: [true, "The car quantity is required."],
    min: [1, "The car quantity must be at least 1."],
    default: 0,
  },
  inStock: {
    type: Boolean,
    required: [true, "The car inStock status is required."],
    default: true,
  }
},
{
    timestamps: true,
  
}
);

export const CarModel = model<Car>("car", carSchema);
