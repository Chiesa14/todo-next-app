import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
export const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to database");
};
