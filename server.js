const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = __dirname;
//uses
app.use("/landingPage", express.static("landingPage"));
app.use("/login", express.static("loginPage"));
app.use("/signup", express.static("signupPage"));

//routes
app
  .route("/landingPage")
  .get((req, res) => {
    res.send("get request working");
  })
  .post((req, res) => {
    res.send("post request working");
  });

app
  .route("/login")
  .get((req, res) => {
    res.send("login request working");
  })
  .post((req, res) => {
    res.send("login request working");
  });

app
  .route("/signup")
  .get((req, res) => {
    res.send("signup request working");
  })
  .post((req, res) => {
    res.send("signup request working");
  });

//listen to me Vegeta
app.listen(port, () => {
  console.log("working");
});
