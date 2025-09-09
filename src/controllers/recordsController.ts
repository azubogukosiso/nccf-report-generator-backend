import { Request, Response } from "express";
import Records from "../models/recordsModel";

const createRecords = async (req: Request, res: Response) => {
  const newRecord = await Records.create(req.body);

  if (newRecord)
    res.json({ message: "Record created successfully!" }).status(200);
};

const viewRecords = async (req: Request, res: Response) => {
  const allRecords = await Records.find();

  if (allRecords) res.json(allRecords).status(200);
};

export { createRecords, viewRecords };
