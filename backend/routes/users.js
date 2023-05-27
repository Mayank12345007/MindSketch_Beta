import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const checkemail = await UserModel.findOne({ email });
  if (checkemail) {
    return res.json({ message: "user already exist" });
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  await new UserModel({
    username,
    email,
    password: hashedpassword,
  }).save();
  res.json({ message: "User Registered Successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  const isvalidpass = await bcrypt.compare(password, user.password);
  if (!isvalidpass) {
    return res.json({ message: "Password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.status(200).json({ success: "true", token, userid: user._id });
});

export { router as userRouter };
