import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const Schema = mongoose.Schema;

const unitSchema = new Schema(
  {
    unitName: {
      type: String,
      required: true,
    },
    password: {
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

// STATIC SIGNUP METHOD
unitSchema.statics.signup = async function (unitName, password, unitId) {
  const salt = await bcryptjs.genSalt(10);
  const hashedPwd = await bcryptjs.hash(password, salt);

  const unit = await this.create({ unitName, password: hashedPwd, unitId });

  return unit;
};

// STATIC SIGNIN METHOD
unitSchema.statics.signin = async function (unitId, password) {
  if (!unitId || !password) throw Error("Fill up all fields!");

  const unit = await this.findOne({ unitId });

  const match = await bcryptjs.compare(password, unit.password);

  if (!match) throw Error("Incorrect password!");

  return unit;
};

export default mongoose.model("Unit", unitSchema);
