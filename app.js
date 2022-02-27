const express = require("express");
const route = require("./router/users");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parsing json
app.use(express.urlencoded({ extended: true })); // parsing link

let myLogger = (req, res, next) => {
  //   console.log("LOGGED");
  req.time = new Date();
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  const kelas = {
    id: 1,
    name: "husnil maarif",
    date: req.time.toString(),
  };
  res.json(kelas);
});

app.get("/about", (req, res) => {
  res.redirect("https://expressjs.com/");
});

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
