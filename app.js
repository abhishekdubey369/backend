import express from "express";
import mongoose from "mongoose";
import PMYA_State_router from "./Routes/PMYA_State-route.js";
import router from "./Routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/PMYAState", PMYA_State_router);
//app.use("/api/stateDistrict",)


const CONNECTION_URL = 'mongodb+srv://Abhigns369:abhigns369@cluster0.krgualo.mongodb.net/test'
const PORT=process.env.PORT || 8000



mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on ${PORT} and connectedto db `)))
.catch((error)=>console.log(error.message));
