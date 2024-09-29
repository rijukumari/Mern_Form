require("dotenv").config();
const mongoose = require("mongoose");

const URL = process.env.MONGO_URL;

const dbConnect = async () => {
  if (!URL) {
    console.log("MongoDB connection string is missing in the environment variables");
    process.exit(1); // Exits the process if the connection URL is missing
  }

  try {
    await mongoose.connect(URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Error while connecting to MongoDB:", error);
    process.exit(1); // Exits the process on connection failure
  }
};

module.exports = dbConnect;
