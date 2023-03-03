const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        default: "",
    },
    faceit: {
        type: String,
        default: "",
    },
    hltv: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    teams_joined: [],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
