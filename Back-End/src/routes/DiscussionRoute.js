var express = require("express")
var router = express.Router()

const discussion = require("../controllers/DiscussionController");

router.get("/", discussion.getPosts);
router.get("/:courseID", discussion.getPosts);
router.post("/", discussion.postQuestion);
router.post("/reply", discussion.replyToPost);

module.exports = router;