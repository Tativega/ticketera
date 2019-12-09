const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/index");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const socket = require("./socket/index");
var cors = require("cors");

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({ secret: "cualquierCosa", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

db.sync({ force: false }).then(() => {
  const http = app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });
  socket.connect(http);
});
app.use("/api", require("./routes"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
