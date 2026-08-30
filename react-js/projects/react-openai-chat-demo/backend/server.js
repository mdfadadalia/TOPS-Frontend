import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (!process.env.OPENAI_API_KEY) {
  console.warn("WARNING: OPENAI_API_KEY is not set.");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6",
      input: message.trim(),
    });

    return res.json({
      success: true,
      answer: response.output_text || "",
    });
  } catch (error) {
    console.error("OpenAI error:", error);

    return res.status(500).json({
      success: false,
      message: error?.message || "OpenAI request failed",
    });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
