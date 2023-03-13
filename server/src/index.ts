import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Martin");
});

app.listen(3000);
