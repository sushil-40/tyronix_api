import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/tyrionix";

export const connMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("mongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
