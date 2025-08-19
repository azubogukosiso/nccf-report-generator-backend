import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";

const app = express();
const port = 3000;

// SETTING UP CORS
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);

mongoose
  .connect("mongodb://0.0.0.0:27017/NCCF_Report_DB")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });
