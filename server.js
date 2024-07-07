require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const app = express();
const port = 4000;

app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
