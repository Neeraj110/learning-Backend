import dotenv from "dotenv";
import connectDB from "./db/indexDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.on("Error", (err) => {
      console.log("Error:", err);
      throw err;
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log("MongoDB connsction failed!!! ", err));

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
