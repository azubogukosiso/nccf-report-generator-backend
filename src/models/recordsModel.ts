import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recordsSchema = new Schema(
  {
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    records: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordsSchema);
