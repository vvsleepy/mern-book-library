// backend/index.js
import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URL } from "./config.js";
import booksRouter from "./routes/books.route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api", booksRouter);

// --------------------------------------------------
// 🌸 Serve Frontend (React Build)
// --------------------------------------------------

// Get current directory path (since ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the React build files
app.use(express.static(path.join(__dirname, "../client/dist")));

// For any other route, serve index.html from the React build
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// --------------------------------------------------
// 🌿 Connect to MongoDB and start the server
// --------------------------------------------------

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT || 5001, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error);
  });
