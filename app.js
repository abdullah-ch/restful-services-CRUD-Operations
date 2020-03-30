const debug = require("debug")("app:proEnv");
const config = require("config");
const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const courses = require("./routes/courses");
const home = require("./routes/home");
const logger = require("./middleware/logger");

// convention
const app = express();

// Setting up view engine for displaying HTML
app.set("view engine", "pug");
//app.set("views", "./views");

// we can send urlcoded data by using express.urlencoded()
// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(logger);
app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log(`Application name : ${config.get("name")}`);
console.log(`Mail Server : ${config.get("mail.host")}`);
console.log(`Mail Server Password : ${config.get("mail.password")}`);

// Process is a global Object and through NODE_ENV, we can see whether the
// application is running on PRODUCTION SERVER or DEVELOPEMENT SERVER
// debug() works like consolelog but is better
debug(process.env.NODE_ENV);
debug(app.get("env"));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}

// Assigning Port as Local Host 3000 will not  be available at every machine
// So, we will use a global varible's enviornment

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`I am listening at port ${port}`);
});
