import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/pets", async (req, res) => {
  try {
    const response = await fetch("http://pets-v2.dev-apis.com/pets");
    if (!response.ok) throw new Error("API Error");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server problem" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
