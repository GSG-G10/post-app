const router = require("express").Router();
const getData = require("./database/queries/get-data.js");
const postData = require("./database/queries/post-data.js");

router.get("/", (req, res) => {
  res.send("home page");
});

router.get("/getusers", (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Internal server error" });
    });
});

router.post("/add-post", (req, res) => {
  console.log(req.body);
  let { textPost, linkImage, linkImageUrl } = req.body;
  postData(textPost, linkImageUrl)
    .then((data) => {
      res.json(data.rows);
    })
    .catch((error) => {
      res.status(500).json({ msg: "Internal server error" });
    });
  res.redirect("/");
});

router.post("/info-post", (req, res) => {});
module.exports = router;
