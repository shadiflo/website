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

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", require("./routes/userroutes"));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
