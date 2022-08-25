import express from "express";
import {  getAllPMYAStates, getAllRecords, PMYAStateAddRecords,  } from "../Controllers/PMYA_State-controller.js";

const PMYA_State_router = express.Router();

PMYA_State_router.get("/", getAllRecords);
PMYA_State_router.get("/getAllPMYAStates", getAllPMYAStates);
PMYA_State_router.post("/PMYAStateAddRecords", PMYAStateAddRecords);

export default PMYA_State_router;
