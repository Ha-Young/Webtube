import express from "express";
import morgan_logger from "morgan";
import helmet_secure from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouters from "./routers/globalRouters"
import userRouters from "./routers/userRouters";
import videoRouters from "./routers/videoRouters";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet_secure());
app.use(morgan_logger("dev"));

app.use("/", globalRouters);
app.use(routes.users, userRouters);
app.use(routes.videos, videoRouters);

export default app;