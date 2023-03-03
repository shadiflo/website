const mongoose = require("mongoose");

const RequestTeamSchema = mongoose.Schema({
    team_id: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    hltv: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    faceit: {
        type: String,
    },
    isAccepted:{
        type:Boolean,
        default:false,
    },
    isRejected:{
        type:Boolean,
        default:false,
    }
});

const RequestTeam = mongoose.model("RequestTeam", RequestTeamSchema);

module.exports = RequestTeam;
