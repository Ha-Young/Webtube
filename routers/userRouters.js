import express from "express";

const userRouters = express.Router();

userRouters.get("/", (req, res) => res.send("user index"));
userRouters.get("/join", (req, res) => res.send("user join"));
userRouters.get("/edit", (req, res) => res.send("user edit"));

export default userRouters;