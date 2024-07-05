import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import customerRouters from "./routes/customerRoutes.js";
import inventoryRouters from "./routes/inventoryRoutes.js";

import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/customer", customerRouters);
app.use("/inventory", inventoryRouters);

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@minifigs.zvwzg7m.mongodb.net/?retryWrites=true&w=majority&appName=Minifigs`
);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});