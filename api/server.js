import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openapi";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "This is ChatGPT AI App",
  });
});

app.post("/", async (req, res) => {
  try {
  } catch (res) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(4000, () => console.log("Server is running on Port 4000"));
