import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from 'config'
import { UserDocument } from "./user.models";

//interface de usuario (tipagem de typescript)
export interface sessionDocument extends mongoose.Document {
  user: UserDocument['_id'];
  valid: boolean
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  valid: {type: Boolean, default: true},
}, {
  timestamps: true
})

const sessionModel = mongoose.model("session", SessionSchema)

export default sessionModel