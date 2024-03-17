import Express from "express";
import cors from "cors";
import Color from "colors";
const app = Express();
import mongoose from "mongoose";
import configDotenv from "dotenv";
const PORT = 8080;
configDotenv.config();
app.use(Express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" Connected to MongoDB database Successfully ".bgGreen.white);
  })
  .catch(() => {
    console.log(" There was error connecting to MongoDB database ".bgRed.white);
  });
app.listen(PORT, () => {
  console.log(` Server is running on PORT ${PORT} `.bgWhite.black);
});
