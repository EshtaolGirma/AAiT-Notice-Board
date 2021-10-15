var express = require("express");
var router = express.Router();

const Department = require("../controllers/DepartController");

router.get("/", Department.getDepartment);
router.get("/:departmentID", Department.getDepartmentById);
router.post("/", Department.postDepartment);
router.patch("/:departmentID", Department.updateDepartmentByID);
router.delete("/:departmentID", Department.deleteDepartmentByID);

module.exports = router;
