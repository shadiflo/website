const User = require("../models/User");
const jwt = require("jsonwebtoken");
const key = process.env.SECRET_KEY;
const PromiseErrors = require("../Utils/PromiseErrors");
const bcrypt = require('bcryptjs');

// ? ROUTE__2 LOGIN USER
exports.LoginUser = PromiseErrors(async (req, res, next) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({
            success: false,
            msg: "Try Different Credentials",
        });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        return res.status(400).json({ success:false, msg: 'Wrong Email or Password' });
    }
    const token = jwt.sign({ id: user._id }, key);

    if (passwordCompare) {
        return res.status(200).json({
            success: true,
            msg: "Login in Successfully",
            user,
            token,
        });
    } else {
        res.status(400).json({
            success: false,
            msg: "username or password is incorrect",
        });
    }
});

// ? ROUTE__1 REGISTER USER
exports.RegisterUser = PromiseErrors(async (req, res, next) => {
    const { username, country, password, twitter } = req.body;
    let user = await User.findOne({ username });

    if (user) {
        return res.status(400).json({
            success: false,
            msg: "Try Different Credentials",
        });
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        user = await User.create({
            username,
            country,
            password: secPass,
            twitter,
        });
        const token = jwt.sign({ id: user._id }, key);

        res.status(200).json({
            success: true,
            msg: "account created successfully",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error",
        });
    }
});

// ? ROUTE__3 LOGOUT USER
exports.updateUser = PromiseErrors(async (req, res, next) => {
    const user = await User.findById({ _id: req.body.user }).select(
        "-password"
    );
    const { username, twitter, hltv, faceit, status, country } = req.body;
    if (user) {
        if (username != "") {
            user.username = username;
        }
        if (twitter != "") {
            user.twitter = twitter;
        }
        if (faceit != "") {
            user.faceit = faceit;
        }
        if (hltv != "") {
            user.hltv = hltv;
        }
        if (country != "") {
            user.country = country;
        }
        console.log(status);
        if (status === "active") user.status = true;
        else user.status = false;

        await user.save();
        return res
            .status(200)
            .json({ success: true, msg: "user update successfully" });
    }
    res.status(400).json({ success: true, msg: "user not found!" });
});

// ? ROUTE__4 LOGOUT USER
exports.LogoutUser = PromiseErrors(async (req, res, next) => {
    const user = await User.findById({ _id: req.body.user }).select(
        "-password"
    );
    if (user) {
        return res
            .status(200)
            .json({ success: true, user, msg: "Logout Successfully" });
    }

    res.status(404).json({ success: true, msg: "user not found" });
});

// ? ROUTE__5 LOGGED IN USER
exports.getLoggedInUserInfo = PromiseErrors(async (req, res, next) => {
    const user = await User.findById({ _id: req.body.user }).select(
        "-password"
    );
    res.json({ msg: "User Fetched Successfully", user, success: true });
});

// ? ROUTE__5 USER WITH THIS ID
exports.getUserInfo = PromiseErrors(async (req, res, next) => {
    const _id = req.header('id');
    const user = await User.findById({ _id }).select(
        "-password"
    );
    if(!user)
        return res.status(400).json({ msg: "User Fetched Successfully", success: true });
        
    res.json({ msg: "User Fetched Successfully", user, success: true });
});

// ? ROUTE__ LOGOUT USER
exports.getAllUsers = PromiseErrors(async (req, res, next) => {
    const users = await User.find({ status: true }).select("-password");
    res.json({ success:true, msg: "All Users Fetched Successfully", users });
});
