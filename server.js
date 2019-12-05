const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

const users = require("./routes/user/usersAuth");
const post = require("./routes/post/post");

// body parser midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB confih
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

//passport middleware
// app.use(passport.initialize());

//passport config
// require("./config/passeport")(passport);

// Use routes
app.use("/user/userAuth", users);
app.use("/post", post);

const port = require("./config/keys").port;

app.listen(port, () => console.log(`Server running on port ${port}`));
