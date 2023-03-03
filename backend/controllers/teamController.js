const PromiseErrors = require("../Utils/PromiseErrors");
const RequestTeam = require("../models/RequestTeam");
const Team = require("../models/Team");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
// body("team_address", "enter a valid email").isEmail(),
//         body("team_name", "team name must be 5 characters").isLength({ min: 5 }),
//         body("password", "Password must be at least 5 characters").isLength({
//             min: 5,
//         }),
exports.RegisterTeam = PromiseErrors(async (req, res, next) => {
    const { team_name, team_address, discord, team_manager_twitter } = req.body;
    if (team_name.length <= 5) {
        return res.status(400).json({
            success: false,
            msg: "team name must be 5 characters",
        });
    }
    let team = await Team.findOne({ team_name });
    if (team) {
        return res.status(400).json({
            success: false,
            msg: "Try different team name",
        });
    }
    team = await Team.findOne({ admin_id: req.body.user });
    if (team) {
        return res.status(400).json({
            success: false,
            msg: "you already have a team",
        });
    }

    const user = await User.findById(req.body.user);

    try {
        team = await Team.create({
            team_name,
            team_address,
            discord,
            admin_id: req.body.user,
            admin: user.username,
            team_manager_twitter,
        });
        user.teams_joined.push(team_name);
        user.save();
        res.status(200).json({
            success: true,
            msg: "Team created successfully",
            team,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});

exports.JoinTeam = PromiseErrors(async (req, res, next) => {
    const { username, hltv, faceit, email } = req.body;
    if (username.length <= 3) {
        return res.status(400).json({
            success: false,
            msg: "name must be 4 characters",
        });
    }
    const team_id = req.header("id");
    let team = await Team.findOne({ admin_id: req.body.user });

    let id;
    if (team) {
        id = team._id.toString();
        // checking if the user is admin of the request team
        if (id === team_id) {
            return res.status(400).json({
                success: false,
                msg: "sorry you are team admin",
            });
        }
    }

    // else finding the team with given team id
    team = await Team.findById(team_id);
    if (!team) {
        return res.status(400).json({
            success: false,
            msg: "no team found",
        });
    }
    id = team._id.toString();

    // checking if already in team
    for (let i = 0; i < team.team_members.length; i++) {
        const element = team.team_members[i];
        if (element._id === team_id)
            return res.status(400).json({
                success: false,
                msg: "you are already in",
            });
    }

    try {
        // getting the logged in user
        const user = await User.findOne({ _id: req.body.user });
        let requests = await RequestTeam.find();
        // validating if request is already sent
        let check = false;
        for (let i = 0; i < requests.length; i++) {
            const element = requests[i];
            id = element.team_id.toString();
            if (id === team_id) {
                if (element.username === user.username) {
                    check = true;
                    break;
                }
            }
        }
        if (check)
            return res.status(400).json({
                success: false,
                msg: "request already sent",
            });
        // creating the request
        let request = await RequestTeam.create({
            username,
            hltv,
            faceit,
            email,
            team_id,
        });
        // reponse ok
        res.status(200).json({
            success: true,
            msg: "request sent to admin",
            request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});

// All Teams Route
exports.getAllTeams = PromiseErrors(async (req, res, next) => {
    let teams = await Team.find();

    try {
        if (!teams) {
            return res.status(400).json({
                success: false,
                msg: "There are no teams",
            });
        }
        res.status(200).json({
            success: true,
            msg: "Teams found successfully",
            teams,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});

// All Teams Route
// getting the requests which all are in db
exports.getRequests = PromiseErrors(async (req, res, next) => {
    const requests = await RequestTeam.find();
    res.status(200).json({ requests, success: true });
});
// getting particular requests that or for logged in admin
exports.getAllRequests = PromiseErrors(async (req, res, next) => {
    const team = await Team.findOne({ admin_id: req.body.user });

    if (!team) {
        return res.status(200);
    }
    let id = team._id.toString();
    requests = await RequestTeam.find({ team_id: id });
    try {
        if (!requests) {
            return res.status(400).json({
                success: false,
                msg: "There are no requests",
            });
        }
        res.status(200).json({
            success: true,
            msg: "requests found successfully",
            requests,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});

// All Teams Route
exports.deleteRequest = PromiseErrors(async (req, res, next) => {
    const _id = req.header("id");
    let request = await RequestTeam.findById(_id);
    try {
        if (!request) {
            return res.status(400).json({
                success: false,
                msg: "There is no request with this id",
            });
        }
        request.delete();
        res.status(200).json({
            success: true,
            msg: "request deleted successfully",
            request,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});
// All Teams Route
exports.acceptRequest = PromiseErrors(async (req, res, next) => {
    const _id = req.header("id");
    let requ = await RequestTeam.findById(_id);
    try {
        if (!requ) {
            return res.status(400).json({
                success: false,
                msg: "There is no request with this id",
            });
        }
        const team = await Team.findById({ _id: requ.team_id });
        const user = await User.findOne({ username: requ.username }).select(
            "-password"
        );
        const member = {
            username: requ.username,
            hltv: requ.hltv,
            email: requ.email,
            faceit: requ.faceit,
        };
        team.team_members.push(member);
        team.save();
        user.teams_joined.push(team.team_name);
        user.save();

        requ.delete();

        res.status(200).json({
            success: true,
            msg: "request deleted",
            requ,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});

// All Teams Route
exports.deleteRequests = PromiseErrors(async (req, res, next) => {
    let requests = await RequestTeam.deleteMany();
    try {
        if (!requests) {
            return res.status(400).json({
                success: false,
                msg: "requests not deleted",
            });
        }
        res.status(200).json({
            success: true,
            msg: "all requests deleted successfully",
            requests,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "internal server error",
        });
    }
});
