import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserModel } from "./models/UserModel";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/user", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching users" });
  }
});

mongoose.connect(`${process.env.MONGO_URI}`);

app.listen(3000, () => console.log("Server ready on port 3000."));
