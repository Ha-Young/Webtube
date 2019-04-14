import express from "express";
import routes from "../routes";
import { home, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";

const videoRouters = express.Router();

videoRouters.get("/", home);
videoRouters.get(routes.upload, upload);
videoRouters.get(routes.videoDetail, videoDetail);
videoRouters.get(routes.editVideo, editVideo);
videoRouters.get(routes.deleteVideo, deleteVideo);


export default videoRouters;