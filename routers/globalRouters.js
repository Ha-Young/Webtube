import express from "express";
import routes from "../routes";

const globalRouters = express.Router();

globalRouters.get(routes.home, (req, res) => {res.send("index~")});
globalRouters.get(routes.join, (req, res) => {res.send("join~")});
globalRouters.get(routes.login, (req, res) => {res.send("login~")});
globalRouters.get(routes.logout, (req, res) => {res.send("logout~")});
globalRouters.get(routes.search, (req, res) => {res.send("search~")});

export default globalRouters;