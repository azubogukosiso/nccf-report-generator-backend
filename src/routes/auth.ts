import express from "express";

import { unitSignup, unitSignin } from "../controllers/authController";

const router = express.Router();

router.post("/signup", unitSignup);
router.post("/signin", unitSignin);

export default router;
