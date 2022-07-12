const express = require("express");
const open = require("open");
const app = express();
const port = process.env.PORT || 3000;

// const path = require("path");
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../src/index.html"));
// });

app.use(express.static("src"));

app.listen(port, (err) => {
  if (err) console.log(err);
  else open("http://localhost:" + port);
});
