import PMYA_State from "../Models/PMAY_State.js";
import bcrypt from "bcryptjs";
import PMAY_State1 from '../Data/PMAY_State.js '

export const getAllRecords = async (req, res, next) => {
  let records;
  try {
    records = await PMYA_State.find();
    console.log(records);
  } catch (err) {
    console.log(err);
  }
  if (!records) {
    return res.status(404).json({ message: "No Records Found" });
  }
  return res.status(200).json({ records });
};


export const PMYAStateAddRecords = async (req, res, next) => {
  console.log(req.body.State);
  console.log("in PMYAStateAddRecords");
  const { State,
    ProjectProposalConsidered,
    PhysicalProgressSanctioned,
    PhysicalProgressGrounded,
    PhysicalProgressCompleted,
    FinancialProgressInvestment,
    CentralAssistanceSanctioned,
    CentralAssistanceReleased } = req.body;


  
  const record = new PMYA_State({
    State,
    ProjectProposalConsidered,
    PhysicalProgressSanctioned,
    PhysicalProgressGrounded,
    PhysicalProgressCompleted,
    FinancialProgressInvestment,
    CentralAssistanceSanctioned,
    CentralAssistanceReleased
  });


  try {
    await record.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ record });
};


export const getAllPMYAStates = async (req, res, next) => {
  let records;
  console.log("in getAllPMYAStates");
  records=PMAY_State1;
  return res.status(200).json({ records});
};
