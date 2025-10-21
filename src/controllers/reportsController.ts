import { Request, Response } from "express";
import Report from "../models/reportsModel";

const viewAllReports = async (req: Request, res: Response) => {
  const allReports = await Report.find();
  if (allReports) res.json(allReports).status(200);
};

const createReports = async (req: Request, res: Response) => {
  const newRecord = await Report.create(req.body);

  if (newRecord)
    res.json({ message: "Report created successfully!" }).status(200);
};

const deleteReports = async (req: Request, res: Response) => {
  const reportId = req.query.id;

  const deletedRecord = await Report.findByIdAndDelete(reportId);

  if (deletedRecord)
    res.json({ message: "Report deleted successfully!" }).status(201);
};

export { createReports, viewAllReports, deleteReports };
