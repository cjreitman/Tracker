const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const users = require("./routes/api/users");
const logs = require("./routes/api/logs");

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/dailyLogs", logs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

