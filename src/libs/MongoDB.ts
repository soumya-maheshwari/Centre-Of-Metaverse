import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const URI=process.env.MONGODB_URI??'';
    if(!URI) throw new Error('MONGODB_URI is not defined')
    const db=await mongoose.connect(URI);
    console.log("MongoDB connected");
    return db;
  } catch (error) {
    console.log(error);
  }
};