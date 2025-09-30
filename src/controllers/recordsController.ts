import { Request, Response } from "express";
import Records from "../models/recordsModel";

const createRecords = async (req: Request, res: Response) => {
  const recordId = req.query.id;

  if (recordId) {
    const editedRecord = await Records.findByIdAndUpdate(recordId, req.body);
    if (editedRecord)
      res.json({ message: "Record edited successfully!" }).status(201);
  } else {
    const newRecord = await Records.create(req.body);

    if (newRecord)
      res.json({ message: "Record created successfully!" }).status(200);
  }
};

const viewRecords = async (req: Request, res: Response) => {
  const recordId = req.query.id;
  const unitId = req.query.unitId;

  if (recordId) {
    const singleRecord = await Records.findById(recordId);
    if (singleRecord) res.json(singleRecord).status(200);
  } else {
    const allRecords = await Records.find({ unitId });
    if (allRecords) res.json(allRecords).status(200);
  }
};

const deleteRecords = async (req: Request, res: Response) => {
  const recordId = req.query.id;

  const deletedRecord = await Records.findByIdAndDelete(recordId);

  if (deletedRecord)
    res.json({ message: "Record deleted succesfully!" }).status(201);
};

export { createRecords, viewRecords, deleteRecords };
