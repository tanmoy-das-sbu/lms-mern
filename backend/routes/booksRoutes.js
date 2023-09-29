import express  from "express";
const router = express.Router()
import { Book } from "../models/bookModel.js";

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Please provide all the required fields",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Error: error.message,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(234).send({
      count:books.length,
      data: books
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ Message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send("No such book found");
    }
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Error: error.message,
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Please provide all the required fields",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send("No such book found");
    }
    return res.status(200).send(`Updated successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("No such book found");
    }
    return res.status(200).send(`Deleted successfully`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      Error: error.message,
    });
  }
});

export default router;