import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PMYA_StateSchema = new Schema({
State: {
    type: String,
    required: true,
    unique:true
  },
ProjectProposalConsidered: {
    type: Number,
    required: true,
    length:20
  },
PhysicalProgressSanctioned: {
    type: Number,
    required: true,
    length:20
  },
PhysicalProgressGrounded: {
    type: Number,
    required: true,
    length:20
  },
PhysicalProgressCompleted: {
    type: Number,
    required: true,
    length:20
  },
FinancialProgressInvestment: {
    type: Number,
    required: true,
    length:20
  },
CentralAssistanceSanctioned: {
    type: Number,
    required: true,
    length:20
  },
CentralAssistanceReleased: {
    type: Number,
    required: true,
    length:20
  },
  
});
export default mongoose.model("PMYA_State_2022", PMYA_StateSchema);
// users
