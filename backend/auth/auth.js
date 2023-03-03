const jwt = require("jsonwebtoken");
// const User = require("../models/User");
const PromiseErrors = require("../Utils/PromiseErrors");
const key = process.env.SECRET_KEY;

exports.isAuthenticated = PromiseErrors(async (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(400).json({ msg: "Please Login", success: false });
    try {
        const decoded = jwt.verify(token, key);
        req.body.user = decoded.id;
        next();
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});
