const express = require("express");
const mongoose = require("mongoose");
const app = express();
const log = console.log;

const port = process.env.PORT || 3000; // for hosting purposes
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

CourseMatRouter = require("./routes/CourseMatRoute");
CourseRouter = require("./routes/CourseRoute");
DepartRouter = require("./routes/DepartRoute");
DiscussionRouter = require("./routes/DiscussionRoute");
NewsFeedRouter = require("./routes/NewsFeedRoute");
// user route import

app.use("/api/Course", CourseRouter);
app.use("/api/CourseMaterial", CourseMatRouter);
app.use("/api/Department", DepartRouter);
app.use("/api/Discussion", DiscussionRouter);
app.use("/api/NewsFeed", NewsFeedRouter);
// user router connection

const DB_URI =
  "mongodb+srv://aait-notice-board:aait-notice-board@aait-notice-board.qq1go.mongodb.net/manjuDB?retryWrites=true&w=majority";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => log("Server running on port " + port));
  })
  .catch((err) => log("Database connection failed. \n", err));

// app.get("/", function (req, res) {
//     res.send({
//         'status': 200,
//     })
// });

module.exports.app = app;
