import cors from 'cors';
import express, { Application } from 'express';
import { CarRoutes } from './app/modules/car/car.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api", CarRoutes);
app.use("/api",OrderRoutes);

export default app;
