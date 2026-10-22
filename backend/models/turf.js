import mongoose from "mongoose";

const bookingSlotSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  startTime: { type: String, required: true }, // e.g. "10:00 AM"
  endTime: { type: String, required: true },   // e.g. "11:00 AM"
  date: { type: String, required: true },      // e.g. "2025-11-04"
});

const turfSchema = new mongoose.Schema({
  name: { type: String, required: true },        // e.g. "Badminton Court 1"
  type: { type: String, required: true },        // e.g. "Badminton", "Tennis"
  bookings: [bookingSlotSchema],
});

const Turf = mongoose.model("Turf", turfSchema);
export default Turf;

