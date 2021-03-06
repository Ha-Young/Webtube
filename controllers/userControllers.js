import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};
export const postJoin = (req, res) =>{
  console.log(req.body);
  const{
    body: { name, email, password, password_verify}
  } = req;
  if(password != password_verify){
    res.status(400);
    res.render("join", { pageTitle: "JOIN" })
  }else{
    //To Do: Register User
    //To Do: Log User in
    res.redirect(routes.home);
  }
}
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  //To do: User Log Out
  res.redirect(routes.home);
};
export const users = (req, res) => {
  res.render("users", { pageTitle: "USERS" });
};
export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "UserDetail" });
};
export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "EditProfile" });
};
export const changePassword = (req, res) => {
    console.log("render ChangePassword");
  res.render("changePassword", { pageTitle: "ChangePassword" });
};
