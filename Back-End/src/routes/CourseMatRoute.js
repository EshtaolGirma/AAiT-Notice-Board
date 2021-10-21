var express = require("express");
var router = express.Router();
const multer = require("multer");

const Material = require("../controllers/CourseMController");
const { FileUploader } = require("../controllers/courseMaterialController");

const upload = multer({ FileUploader });

router.get("/", Material.getMaterial);
// router.post("/", FileUploader, Material.postMaterial);
router.post("/", upload.single("Ma"), (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: req.body.Maa,
  });
});

module.exports = router;
