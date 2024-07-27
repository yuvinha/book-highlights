import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import quotations from "./data/quotations.js";
import User from "./models/userModel.js";
import Quotation from "./models/quotationModel.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const importData = async () => {
  try {
    // Delete any existing data
    await Quotation.deleteMany();
    await User.deleteMany();
    // Insert user data
    const createdUsers = await User.insertMany(users);
    // Identify admin user
    const adminUser = createdUsers.find((user) => user.isAdmin === true);
    // Assign admin user to quotations
    const sampleQuotations = quotations.map((quotation) => {
      return { ...quotation, user: adminUser };
    });
    // Insert quotation data
    await Quotation.insertMany(sampleQuotations);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Quotation.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
