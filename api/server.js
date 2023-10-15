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

const Configuration = new Configuration({
  apiKey: process.env.OPENAPI_API_KEY,
});
const openapi = new OpenAIApi(Configuration);

app.post("/", async (req, res) => {
  try {
    const response = await openapi.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.input,
      temperature: 0.5,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    console.log("PASSED: ", req.body.input);

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (res) {
    console.log("FAILED: ", req.body.input);
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(4000, () => console.log("Server is running on Port 4000"));
