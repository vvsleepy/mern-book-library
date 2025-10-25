// backend/index.js
import express from "express";
import mongoose from "mongoose";
import { PORT, MONGODB_URL } from "./config.js";
import booksRouter from "./routes/books.route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// --------------------------------------------------
// 🌿 Middleware
// --------------------------------------------------
app.use(express.json());
app.use(cors());

// --------------------------------------------------
// 📚 API Routes
// --------------------------------------------------
app.use("/api", booksRouter);

// --------------------------------------------------
// 🌸 Serve Frontend (React Build)
// --------------------------------------------------

// These lines recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle all other routes by returning React’s index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// --------------------------------------------------
// 🚀 Connect to MongoDB & Start Server
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
