import express from "express";
import routes from "../routes";

const videoRouters = express.Router();

videoRouters.get("/", (req, res) => { res.send("videos index")});
videoRouters.get(routes.upload, (req, res) => { res.send("videos upload")});
videoRouters.get(routes.videoDetail, (req, res) => { res.send("videos detail")});
videoRouters.get(routes.editVideo, (req, res) => { res.send("videos editVideo")});
videoRouters.get(routes.deleteVideo, (req, res) => { res.send("videos deleteVideo")});


export default videoRouters;