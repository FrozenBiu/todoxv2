import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import route from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(urlencoded());

// cors
app.use(cors());

// route
route(app);

connectDB.then(() => {
  console.log("Liên kết DB thành công");
  app.listen(5001, () => {
    console.log(`Server đang mở trên cổng ${PORT}`);
  });
});
