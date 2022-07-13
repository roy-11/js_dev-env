import express from "express";
import open from "open";
// import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../src/index.html"));
// });

app.use(express.static("src"));

app.listen(port, (err) => {
  if (err) console.log(err);
  else open("http://localhost:" + port);
});
