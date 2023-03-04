require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const URI = process.env.URI 
const PORT = process.env.PORT || 5000;

mongoose.connect(URI, () => {
    console.log("Connected to clanbase Database");
});


// ? Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to Uncaught Exception ");
    process.exit(0);
});


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", require("./routes/userroutes"));
app.use("/teams", require("./routes/teamroutes"));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
// Unhandled Error
process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log("shutting down the server due to Promise Rejection ");
    app.close(() => {
        process.exit(0);
    });
});
