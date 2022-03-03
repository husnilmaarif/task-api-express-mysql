const express = require("express");
const path = require("path");
const app = express();
const productRouter = require("./app/product/routes");
const logger = require("morgan");
const { url } = require("inspector");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1", productRouter);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    massage: "resource" + url.originalUrl + "not found",
  });
});

app.listen(3000, () => console.log("server: http://localhost:3000"));

// belum selesai
