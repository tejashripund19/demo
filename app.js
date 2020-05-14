const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");

const userRouter = require("./routes/userRouter.js");
const { provideErrorHandler } = require("./middleware");

app.use(bodyParser.json());
app.use(provideErrorHandler);

app.use("/", userRouter);

module.exports = app;

//start server
const port = 3000;
app.listen(port, () => {
  console.log(`app running on ${port}..`);
});
//data connection

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected  to DB!");
  }
);
