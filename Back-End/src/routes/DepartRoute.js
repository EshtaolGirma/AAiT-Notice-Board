var express = require("express");
var router = express.Router();

const Department = require("../controllers/DepartController");

router.get("/", Department.getDepartment);
router.post("/", Department.postDepartment);

module.exports = router;
