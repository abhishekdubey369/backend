import State from "../Models/State.js";
import bcrypt from "bcryptjs";
import States from '../Data/states-and-districts.js'


export const getAllStates = async (req, res, next) => {
  console.log("in getAllUser")
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};
