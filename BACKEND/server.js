const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8070; // Assigning port for the application

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection success!");
}); // Using function to show database connection prompt message

const studentRouter = require("./routes/students.js");

http://Localhost:8070/student  //backend url

app.use("/student",studentRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
}); // Application running on port 8070 that we assigned
