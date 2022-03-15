import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import config from 'config'

//interface de usuario (tipagem de typescript)
export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  passowrd: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true}
}, {
  timestamps: true
})

userSchema.pre("save", async(next)=>{
  let user = this as any
  if(!user.isModified('password')){
    return next()
  } 
  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'))

  const hash = await bcrypt.hashSync(user.passowrd, salt)
  user.passowrd = hash;
  return next();
})

userSchema.methods.comparePassword = async function (candidatePassword:string) {
  const user = this as UserDocument 
  return bcrypt.compare(candidatePassword, user.passowrd).catch((e)=> false)
}

const UserModel = mongoose.model("User", userSchema)

export default UserModel