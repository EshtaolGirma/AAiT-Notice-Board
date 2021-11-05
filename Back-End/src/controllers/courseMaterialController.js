const path = require("path");
const crypto = require("crypto");
const { GridFsStorage } = require("multer-gridfs-storage");

// Mongo URI
const mongoURI =
  "mongodb+srv://aait-notice-board:aait-notice-board@aait-notice-board.qq1go.mongodb.net/manjuDB?retryWrites=true&w=majority";

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "FileCollection",
          metadata: {
            course: "111",
            name: file.originalname,
            category: "slides",
          },
        };
        resolve(fileInfo);
      });
    });
  },
});

module.exports = { storage };
