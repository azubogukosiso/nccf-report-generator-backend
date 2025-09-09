import { Request, Response } from "express";
import Unit from "../models/unitModel";
import jwt from "jsonwebtoken";

// FUNCTION TO CREATE JWT
const createToken = (_id: string) => {
  return jwt.sign({ _id }, "i9ir9r73gofyuo3kchou109u09uyT#ER&#Y@&*F", {
    expiresIn: "3d",
  });
};

// UNIT SIGNUP
export const unitSignup = async (req: Request, res: Response) => {
  const { unitName, password, unitId } = req.body;

  try {
    const unit = await (Unit as any).signup(unitName, password, unitId);
    res.status(200).json({ success: `Unit created successfully: ${unit}` });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// UNIT SIGNIN
export const unitSignin = async (req: Request, res: Response) => {
  const { unitId, password } = req.body;

  try {
    const unit = await (Unit as any).signin(unitId, password);

    // CREATE A TOKEN (JWT)
    const token = createToken(unit._id);

    res
      .status(200)
      .json({ token, unitName: unit.unitName, unitId: unit.unitId });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
