const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

// Mongo URI
const mongoURI =
  "mongodb+srv://aait-notice-board:aait-notice-board@aait-notice-board.qq1go.mongodb.net/manjuDB?retryWrites=true&w=majority";

// Create mongo connection

const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs;

conn.once("open", () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("FileCollection");
});

function getFilesByCourse(req, res) {
  const courseID = req.params.courseID;
  // courseID from the url
  gfs.files.find({ "metadata.course": courseID }).toArray((err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exist",
      });
    }

    // Files exist
    return res.json(file);
  });
}
// Course Material open or download based on file type

function openFile(req, res) {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file exists
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // if possible show file preview else download it
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  });
}

// Course material post endpoint

function postMaterial(req, res) {
  // console.log(req.file);
  res.json({ file: req.file });
}

// Course material delete endpoint

function deleteMaterial(req, res) {
  gfs.remove(
    { _id: req.params.id, root: "FileCollection" },
    (err, gridStore) => {
      if (err) {
        return res.status(404).json({ err: err });
      }

      res.json("deleted");
    }
  );
}

module.exports = {
  getFilesByCourse,
  openFile,
  postMaterial,
  deleteMaterial,
};
