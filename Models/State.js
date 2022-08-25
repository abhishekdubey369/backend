import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stateSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  districts: []

  
});
export default mongoose.model("State", stateSchema);
// users
