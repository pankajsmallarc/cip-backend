const mongoose = require("mongoose");
async function connectToDatabase() {
  try {
    await mongoose.connect (process.env.DATABASE)

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectToDatabase();
