import express from "express";

import {
  createReports,
  viewAllReports,
  viewSingleReport,
  deleteReports,
  editReports,
} from "../controllers/reportsController";

const router = express.Router();

router.post("/", createReports);
router.get("/", viewAllReports);
router.get("/:id", viewSingleReport);
router.patch("/", editReports);
router.delete("/", deleteReports);

export default router;
