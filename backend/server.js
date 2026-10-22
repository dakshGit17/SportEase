import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/ItemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/BookingRoutes.js";
import turfRoutes from "./routes/turfroutes.js";
 // 👈 new import

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json());

// ✅ Base route
app.get("/", (req, res) => {
  res.send("Backend is working fine ✅");
});
app.use((req, res, next) => {
  if (req.method !== "GET") {
    express.json()(req, res, next);
  } else {
    next();
  }
});
// ✅ Routes
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/turfs", turfRoutes); // 👈 new route for turf booking



// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
