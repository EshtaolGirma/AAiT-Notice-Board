var express = require("express")
var router = express.Router()

const discussion = require("../controllers/DiscussionController");

router.get("/", discussion.getPosts)
router.post("/question", discussion.postQuestion)
router.post("/reply", discussion.replyToPost)

module.exports = router
