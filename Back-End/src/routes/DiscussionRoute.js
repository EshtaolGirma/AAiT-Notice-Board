var express = require("express")
var router = express.Router()

const discussion = require("../controllers/DiscussionController");

router.get("/", discussion.getPosts)
router.post("/", discussion.postSomething)

module.exports = router