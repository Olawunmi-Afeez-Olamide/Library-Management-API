const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb);
    console.log("MongoDb connected successfully");
  } catch {
    console.error(error);
    process.exit(1);
  }
};
