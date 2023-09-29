import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import bookRoute from "./routes/booksRoutes.js"
import cors from "cors"

const app = express();
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type'],
}))
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome");
});

app.use("/books", bookRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas", err);
  });
