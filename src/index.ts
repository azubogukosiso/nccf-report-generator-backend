import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth";
import recordsRoutes from "./routes/records";

const app = express();
const port = 3000;

// SETTING UP CORS
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/records", recordsRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/NCCF_Report_DB")
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });
