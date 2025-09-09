import express from "express";

import { createRecords, viewRecords } from "../controllers/recordsController";

const router = express.Router();

router.post("/", createRecords);
router.get("/", viewRecords);

export default router;
