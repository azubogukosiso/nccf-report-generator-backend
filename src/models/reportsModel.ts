import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportsSchema = new Schema(
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
    appreciation: {
      type: String,
      required: true,
    },
    challenges: {
      type: String,
      required: true,
    },
    testimonies: {
      type: String,
      required: true,
    },
    prayerRequest: {
      type: String,
      required: true,
    },
    conclusion: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    unitId: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportsSchema);
