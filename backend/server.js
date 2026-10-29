
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import itemRoutes from "./routes/ItemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/BookingRoutes.js";
import turfRoutes from "./routes/turfroutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Backend is working fine");
});

// API routes
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/turfs", turfRoutes);

const PORT = process.env.PORT || 5000;

// Connect to DB first, then start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
