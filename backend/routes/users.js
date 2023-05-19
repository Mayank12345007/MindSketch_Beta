import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const checkuser = await UserModel.findOne({ username });
  if (checkuser) {
    return res.json({ message: "User Already Exist.Try Different Name" });
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  await new UserModel({
    username,
    password: hashedpassword,
  }).save();
  res.json({ message: "User Registered Successfully" });
});


router.post("/login",async (req,res)=>{
  
})
export { router as userRouter };