const express = require("express");
const { isAuthenticated } = require("../auth/auth");
const router = express.Router();
const {
    LoginUser,
    RegisterUser,
    getAllUsers,
    getLoggedInUserInfo,
    LogoutUser,
    updateUser,
    getUserInfo,
} = require("../controllers/userController");

// ? Routes
router.route("/login").post(LoginUser);
router.route("/register").post(RegisterUser);
router.route("/getuser").get(isAuthenticated, getLoggedInUserInfo);
router.route("/aboutuser").get(getUserInfo);
router.route("/updateuser").put(isAuthenticated, updateUser);
router.route("/logout").post(isAuthenticated, LogoutUser);

router.route("/admin/getallusers").get(getAllUsers);

module.exports = router;
