import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./connection/db.js";
import productRoutes from "./routes/products.routes.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Routes
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
