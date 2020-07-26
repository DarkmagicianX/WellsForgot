const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = __dirname;
app.get("/", (req, res) => {
  res.sendFile(`${path}/landingPage/landingPage.html`);
  //   res.send("hello");
});
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

app.listen(port, () => {
  console.log("working");
});
