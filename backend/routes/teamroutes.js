const express = require("express");
const { isAuthenticated } = require("../auth/auth");
const router = express.Router();
const { RegisterTeam, getAllTeams, JoinTeam, getAllRequests, deleteRequest, deleteRequests, acceptRequest, getRequests } = require("../controllers/teamController");
// ? Routes
router.route("/createteam").post(isAuthenticated, RegisterTeam);
// join team
router.route("/jointeam").post(isAuthenticated, JoinTeam);
router.route("/getallrequests").get(isAuthenticated, getAllRequests);
router.route("/getrequests").get(isAuthenticated, getRequests);
router.route("/requests").get(isAuthenticated, acceptRequest);
router.route("/requests").delete(isAuthenticated, deleteRequest);
router.route("/deleterequests").delete(isAuthenticated, deleteRequests);
router.route("/getallteams").get(getAllTeams);

module.exports = router;
