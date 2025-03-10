import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//Connect Db
connMongoDb();

//Middleware

app.use(express.json());

import userRouter from "./routers/userRouter.js";
import { connMongoDb } from "./config/mongodbConfig.js";

// Api endpoints
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "It's live",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
