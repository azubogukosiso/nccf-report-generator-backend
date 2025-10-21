import express from "express";

import {
  createReports,
  viewAllReports,
  deleteReports,
} from "../controllers/reportsController";

const router = express.Router();

router.post("/", createReports);
router.get("/", viewAllReports);
router.delete("/", deleteReports);

export default router;
