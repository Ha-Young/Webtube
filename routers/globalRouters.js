import express from "express";

const globalRouters = express.Router();

globalRouters.get("/", (req, res) => {res.send("index~")});

export default globalRouters;