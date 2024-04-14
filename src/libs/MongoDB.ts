import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const URI=process.env.MONGODB_URI??'';
    if(!URI) throw new Error('MONGODB_URI is not defined')
    await mongoose.connect(URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};