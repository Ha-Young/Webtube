export const home = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};
export const search = (req, res) => {
  const { 
      query: {searchKeyword : searchingBy}
  } = req;
  res.render("search", { pageTitle: "SEARCH" , searchingBy});
};
export const videos = (req, res) => {
  res.render("videos", { pageTitle: "VIDEOS" });
};
export const upload = (req, res) => {
  res.render("upload", { pageTitle: "UPLOAD" });
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
