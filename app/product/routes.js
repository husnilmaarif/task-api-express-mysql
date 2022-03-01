const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads" });
const fs = require("fs");
const path = require("path");
const connection = require("../../config/mysql");

router.get("/", (req, res) => {
  connection.connect();
  connection.query(
    {
      sql: "SELECT * FROM products",
    },
    (error, result) => {
      if (error) {
        res.send({
          status: "failed",
          response: "failed to fetch data",
        });
      } else {
        res.send({
          status: "success",
          response: result,
        });
      }
    }
  );
});

router.get("/product/:id", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.post("/product/", upload.single("image"), (req, res) => {
  const { name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, "uploads", image.originalname);
    fs.renameSync(image.path, target);
    res.sendFile(target);
  }
});

module.exports = router;
