import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const URI = process.env.MONGODB_URI ?? "";
    console.log("Connecting to MongoDB",mongoose.connection.readyState);
    // if (mongoose.connection.readyState === 1) {
    //   console.log("Already connected to MongoDB");
    //   return mongoose.connection;
    // }
    if (!URI) throw new Error("MONGODB_URI is not defined");
    const db = await mongoose.connect(URI);
    console.log("MongoDB connected");
    return db.connection;
  } catch (error) {
    console.log(error);
  }
};
