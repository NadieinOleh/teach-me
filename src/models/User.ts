import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, unique: true }, 
    classNumber: { type: Number, required: true },        
  },
  { timestamps: true } 
);

const User = models.User || model("User", UserSchema);

export default User;
