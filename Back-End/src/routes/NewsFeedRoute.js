var express = require("express");
var router = express.Router();
var newsFeedController = require("../controllers/NewsFeedController");

router.get("/", newsFeedController.getAll);
router.get("/:newsId", newsFeedController.getOne);
router.post("/", newsFeedController.post);
router.delete("/:newsId", newsFeedController.delete);
router.put("/:newsId", newsFeedController.put);

module.exports = router;
