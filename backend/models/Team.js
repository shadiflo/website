const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    // team official email
    team_address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "admin",
    },
    admin: {
        type: String,
    },
    admin_id: {
        type: String,
    },
    // team manager/creater email
    discord: {
        type: String,
        default: "",
    },
    team_manager_twitter: {
        type: String,
        default: "",
    },
    team_members: [],
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
