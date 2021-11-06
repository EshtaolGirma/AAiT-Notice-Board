var express = require("express");
var router = express.Router();
const multer = require("multer");

const Material = require("../controllers/CourseMController");
const { storage } = require("../middleware/courseMaterial");

const upload = multer({ storage });

router.get("/course/:courseID", Material.getFilesByCourse);
router.get("/open/:filename", Material.openFile);
router.post("/", upload.single("file"), Material.postMaterial);
router.delete("/:id", Material.deleteMaterial);

module.exports = router;
