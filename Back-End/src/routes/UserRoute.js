var express = require("express");
var router = express.Router();
var UsersController = require("../controllers/UsersController");
var auth = require('../middleware/auth')

router.get("/", UsersController.getUser);
router.get("/:stuId", UsersController.getUserById);
router.post("/signUp", UsersController.signUp);
router.post("/signIn", UsersController.signIn);
router.delete("/:stuId", UsersController.deleteUserByID);
router.patch("/:stuId", UsersController.updateUser);
router.get("/deptAdmin", UsersController.getDeptAdmin);
router.get("/deptAdmin/:deptAdminId", UsersController.getDeptAdminById);
router.post("/deptAdmin", UsersController.postDeptAdmin);
router.patch("/deptAdmin/:deptAdminId", UsersController.updateDeptAdmin);
router.delete("/deptAdmin/:deptAdminId", UsersController.deleteDeptAdminByID);
router.post("/Admin", UsersController.postAdmin);
router.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");})

module.exports = router;
