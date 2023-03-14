import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Martin");
});

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("questions", questionSchema);

app.get("/questions", async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

app.listen(3000, () => {
  mongoose.connect(
    "mongodb+srv://MartinApiwat:Martin123@cluster0.rigswq4.mongodb.net/techhub?retryWrites=true&w=majority"
  );
});
