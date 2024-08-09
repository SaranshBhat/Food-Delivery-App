import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully!!!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        // Optionally, exit the process if the database connection fails
        process.exit(1); // This will terminate the process with a failure code
    }
};
