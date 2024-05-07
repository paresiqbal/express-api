import { Schema, model } from "mongoose";

export interface IUser {
  _id?: string;
  fullname: string;
  email: string;
}

const UserScema = new Schema<IUser>({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
});

export const UserModel = model<IUser>("User", UserScema);
