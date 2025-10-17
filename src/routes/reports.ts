import express from "express";

import { createReports } from "../controllers/reportsController";

const router = express.Router();

router.post("/", createReports);

export default router;
