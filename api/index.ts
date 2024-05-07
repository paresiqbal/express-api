import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserRouter } from "../src/routes/UserRoute";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/user", UserRouter);

mongoose.connect(`${process.env.MONGO_URI}`);

app.listen(3000, () => console.log("Server ready on port 3000."));
