import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "HOME" , videos});
};
export const search = (req, res) => {
  const { 
      query: {searchKeyword : searchingBy}
  } = req;
  res.render("search", { pageTitle: "SEARCH" , searchingBy, videos});
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "UPLOAD" });
};
export const postUpload = (req, res) => {
  console.log("aaa");
  const {
    body: {file, title, description}
  } = req
  //To Do: Upload and Save Video
  res.redirect(routes.videoDetail(12345));
};
export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "VideoDetail" });
};
export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "EditVideo" });
};
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
};
