import express from "express";
import routes from "../routes";
import { logout, postLogin, getJoin, postJoin, getLogin } from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";

const globalRouters = express.Router();

globalRouters.get(routes.home, home);
globalRouters.get(routes.join, getJoin);
globalRouters.post(routes.join, postJoin);
globalRouters.get(routes.login, getLogin);
globalRouters.post(routes.login, postLogin);
globalRouters.get(routes.logout, logout);
globalRouters.get(routes.search, search);

export default globalRouters;