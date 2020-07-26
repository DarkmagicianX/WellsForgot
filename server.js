const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = __dirname;
app.get("/", (req, res) => {
  res.sendFile(`${path}/landingPage/landingPage.html`);
  //   res.send("hello");
});

app.listen(port, () => {
  console.log("working");
});
