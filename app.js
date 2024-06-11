const express = require("express");
const dotenv = require("dotenv").config();
const DBSetup = require("./src/config/DB");

const cipFileTrackerRoute = require('./src/routes/cipFileTrackerRouter')
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use("/api/v1/cipFileTracker",cipFileTrackerRoute)
app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
