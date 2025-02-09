const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

// const cors = require("cors");

const app = express();
const port = 3000;

// const allowedOrigins = ["http://localhost:8081"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Các phương thức HTTP được cho phép
//   allowedHeaders: ["Content-Type", "Authorization"], // Các header được cho phép
//   credentials: true,
// };

// // middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors(corsOptions));

// // routes
app.use("/api/product", productRoute);

mongoose
  .connect(
    "mongodb+srv://shair:shairpmbe@product-management-be.upqhr.mongodb.net/product-management?retryWrites=true&w=majority&appName=product-management-be"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => console.log("Connection failed!"));
