import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import recordsRoutes from "./routes/records";
import reportsRoutes from "./routes/reports";

// LOAD ENVIRONMENT VARIABLES FROM .ENV FILE
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// SETTING UP CORS
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/records", recordsRoutes);
app.use("/api/reports", reportsRoutes);

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
  throw new Error("DB_URL environment variable is not defined.");
}

mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });
