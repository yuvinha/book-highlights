import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quotationRoutes from "./routes/quotationRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const port = process.env.PORT;
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/quotations", quotationRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
