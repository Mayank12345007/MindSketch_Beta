import express from "express";
import dotenv from "dotenv";
import { PostModel } from "../models/post.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {});

export { router as postRouter };
