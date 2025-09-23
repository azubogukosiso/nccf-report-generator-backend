import express from "express";

import {
  createRecords,
  viewRecords,
  deleteRecords,
} from "../controllers/recordsController";

const router = express.Router();

router.post("/", createRecords);
router.delete("/", deleteRecords);
router.get("/", viewRecords);

export default router;
