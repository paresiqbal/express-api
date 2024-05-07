import { UserModel } from "../models/UserModel";
import express from "express";

const router = express();

router.post("/register", async (req, res) => {
  try {
    const { fullname, email } = req.body;

    const newUser = new UserModel({ fullname, email });

    const savedUser = await newUser.save();

    res.json({ message: "User created successfully!", user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
});
