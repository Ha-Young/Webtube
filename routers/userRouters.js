import express from "express";
import routes from "../routes";

const userRouters = express.Router();

userRouters.get("/", (req, res) => res.send("user index"));
userRouters.get(routes.userDetail, (req, res) => res.send("user detail :id"));
userRouters.get(routes.editProfile, (req, res) => res.send("user edit profile"));
userRouters.get(routes.changePassword, (req, res) => res.send("user changePassword"));

export default userRouters;