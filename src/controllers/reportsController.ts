import { Request, Response } from "express";
import Report from "../models/reportsModel";

const createReports = async (req: Request, res: Response) => {
  const newRecord = await Report.create(req.body);

  if (newRecord)
    res.json({ message: "Report created successfully!" }).status(200);
};

export { createReports };
