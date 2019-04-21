import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userControllers";

const userRouters = express.Router();

userRouters.get("/", users);
userRouters.get(routes.editProfile, editProfile);
userRouters.get(routes.changePassword, changePassword);
userRouters.get(routes.userDetail(), userDetail);

export default userRouters;