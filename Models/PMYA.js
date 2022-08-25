import mongoose from "mongoose";
import PMYA_StateSchema from './PMAY_State.js'
const Schema = mongoose.Schema;

const PMYA_StateSchema = new Schema({

State: [{ type: mongoose.Types.ObjectId, ref: "PMYA_State_2022" }]  
});
export default mongoose.model("PMYA_State_2022", PMYA_StateSchema);
// users
