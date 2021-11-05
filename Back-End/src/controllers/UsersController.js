const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Discussion = require("../Models/DiscussionModel");
const Department = require("../Models/DepartModel");
const NewsFeed = require("../Models/NewsFeedModel");
const Student = require("../Models/users/StudentsModel");
const Admin = require("../Models/users/AdminModel");
const DeptAdmin = require("../Models/users/DeptAdminModel");
// const DeptAdminModel = require("../Models/users/DeptAdminModel");
const TOKEN_KEY = "thisisthesecretkey";

function getUser(req, res) {
  Student.find()
    //.populate("")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "cant feth users" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function getUserById(req, res) {
  const stuId = req.params.stuId;
  Student.findById({ _id: stuId })
    //.populate("")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "cant feth user" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
async function signUp(req, res) {
  // try {
  // console.log(req.body)
  const { username, email, password, year, deptId } = req.body;
  if (!(username && email && password && year && deptId)) {
    res.status(400).send("All input is required");
  }
  try {
    const doesExist = await Student.findOne({ email: email }).then(
      (user) => user.id
    );
    console.log(doesExist);
    return res.status(409).send("User Already Exist. Please Login");
  } catch (e) {
    encryptedPassword = await bcrypt.hash(password, 10);

    const student = await new Student({
      _id: new mongoose.Types.ObjectId(),
      username: username,
      email: email,
      password: encryptedPassword,
      year: year,
      deptId: deptId,
    });
    student.save();
    const token = jwt.sign(
      {
        user_id: student._id,
        username: student.username,
        email: student.email,
        year: student.role,
        deptId: student.username,
      },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    student.token = token;
    res.status(201).send(token);
  }
}

function signInAdmin(res, email, password) {
  const user = Admin.findOne({ email: email })
    .exec()
    .then(async (result) => {
      const rs = bcrypt.compare(password, result.password);
      if (result && rs) {
        const token = jwt.sign(
          {
            user_id: user._id,
            username: user.username,
            email: user.email,
            role: "admin",
          },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        user.token = token;
        //console.log(.token)
        res.status(200).json(user.token);
      } else {
        res.status(500).json("Invalid Info");
      }
    })
    .catch((err) => {
      signInDeptAdmin(res, email, password);
    });
}
function signInDeptAdmin(res, email, password) {
  const user = DeptAdmin.findOne({ email: email })
    .exec()
    .then(async (result) => {
      const rs = await bcrypt.compare(password, result.password);
      if (result && rs) {
        const token = jwt.sign(
          {
            user_id: user._id,
            username: user.username,
            email: user.email,
            deptId: user.deptId,
            role: "deptAdmin",
          },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        user.token = token;
        res.status(200).json(user.token);
      } else {
        res.status(500).json("Invalid Info");
      }
    })
    .catch((err) => {
      signInStudent(res, email, password);
    });
}
function signInStudent(res, email, password) {
  const stu = Student.findOne({ email: email })
    .exec()
    .then(async (result) => {
      const rs = await bcrypt.compare(password, result.password);
      if (result && rs) {
        const token = jwt.sign(
          {
            user_id: stu._id,
            username: stu.username,
            email: stu.email,
            year: stu.year,
            deptId: stu.deptId,
            role: "user",
          },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        stu.token = token;
        res.status(200).json(stu.token);
      } else {
        res.status(500).json("Invalid Info");
      }
    })
    .catch((err) => {
      res.status(404).json("User Not Found");
    });
}

function signIn(req, res) {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  signInAdmin(res, email, password);
}

// function signOut(req,res){

// }
function updateUser(req, res) {
  userId = req.params.userId;

  const updatedUser = {};
  for (const ops of req.body) {
    updatedUser[ops.propName] = ops.value;
    if (password in updatedUser) {
      encryptedPassword = bcrypt.hash(password, 10);
      updatedUser[password] = encryptedPassword;
    }
    Student.findOneAndUpdate(
      { _id: userId },
      { $set: updatedUser },
      { new: true }
    )
      .exec()
      .then((result) => {
        if (result) {
          res.status(204).json(result);
        } else {
          res.status(404).json({
            message: "couldnt update",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "the server encountered an error",
          error: err,
        });
      });
  }
}
function deleteUserByID(req, res) {
  const id = req.params.stuId;
  console.log(id);
  Student.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

///////////////////////////////////////////////////////////////////////////
function getDeptAdmin(req, res) {
  DeptAdmin.find()
    //.populate("")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "cant feth users" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function getDeptAdminById(req, res) {
  const deptAdminId = req.params.DeptAdminId;
  DeptAdmin.findById({ _id: DeptAdminId })
    //.populate("")
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "cant feth admin" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
async function postDeptAdmin(req, res) {
  const { username, email, password, deptId } = req.body;
  if (!(username && email && password && deptId)) {
    res.status(400).send("All input is required");
  }
  encryptedPassword = await bcrypt.hash(password, 10);

  const deptAdmin = new DeptAdmin({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email: email,
    password: encryptedPassword,
    deptId: deptId,
  })
    .save()
    .then((result) => {
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(409).json({
          message: "error while posting",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "server problem",
        error: err,
      });
    });
}
function updateDeptAdmin(req, res) {
  deptAdminId = req.params.DeptAdminId;

  const updatedDeptAdmin = {};
  for (const ops of req.body) {
    updatedDeptAdmin[ops.propName] = ops.value;
    if (password in updatedUser) {
      encryptedPassword = bcrypt.hash(password, 10);
      updatedDeptAdmin[password] = encryptedPassword;
    }
    DeptAdmin.findOneAndUpdate(
      { _id: userId },
      { $set: updatedDeptAdmin },
      { new: true }
    )
      .exec()
      .then((result) => {
        if (result) {
          res.status(204).json(result);
        } else {
          res.status(404).json({
            message: "couldnt update",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "the server encountered an error",
          error: err,
        });
      });
  }
}
function deleteDeptAdminByID(req, res) {
  const id = req.params.deptAdminId;
  DeptAdmin.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}
/////////////////////////////////////////////////
async function postAdmin(req, res) {
  const { username, email, password } = req.body;
  if (!(username && email && password)) {
    res.status(400).send("All input is required");
  }
  encryptedPassword = await bcrypt.hash(password, 10);

  console.log(encryptedPassword);

  const admin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email: email,
    password: encryptedPassword,
  })
    .save()
    .then((result) => {
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(409).json({
          message: "error while posting",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "server problem",
        error: err,
      });
    });
}
module.exports = {
  getUser,
  getUserById,
  signUp,
  signIn,
  updateUser,
  deleteUserByID,
  getDeptAdmin,
  getDeptAdminById,
  postDeptAdmin,
  updateDeptAdmin,
  deleteDeptAdminByID,
  postAdmin,
};
