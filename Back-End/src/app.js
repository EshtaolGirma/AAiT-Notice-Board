const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


CourseMatRouter = require('./routes/CourseMatRoute');
CourseRouter = require('./routes/CourseRoute');
DepartRouter = require('./routes/DepartRoute')
DiscussionRouter = require('./routes/DiscussionRoute')
NewsFeedRouter = require('./routes/NewsFeedRoute')
UserRouter = require('./routes/UserRoute');

app.use("/api/Course", CourseRouter);
// app.use("/api/CourseMaterial", CourseMatRouter);
// app.use("/api/Department", DepartRouter);
// app.use("/api/Discussion", DiscussionRouter);
app.use("/api/NewsFeed", NewsFeedRouter);
// app.use("/api/User", UserRouter);


const DB_URI = 'mongodb+srv://aait-notice-board:aait-notice-board@aait-notice-board.qq1go.mongodb.net/manjuDB?retryWrites=true&w=majority'

mongoose.connect(DB_URI).then(() => {
    app.listen(3000, () => console.log('Server running...'));
})
    .catch((err) => console.log('Error occurred while connecting', err));


module.exports.app = app

