const multer = require("multer");
const path = require("path");

// Cấu hình lưu ảnh vào thư mục 'uploads/'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Only JPEG, PNG, JPG files are allowed"), false);
  }
  cb(null, true);
};

// Middleware upload file
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
