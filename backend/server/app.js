import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(cors()); // Allow all origins by default

const port = process.env.PORT || 3008;
const API_URL = process.env.API_URL;

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // ✅ Add this to parse JSON bodies

// Homepage test
app.get("/", (req, res) => {
  res.send("Hi");
});

// POST route
// app.post("/character-search", async (req, res) => {
//   console.log("Received body:", req.body); // ✅ Add this
//   const character = req.body.character?.toLowerCase().replace(" ", "-");
//   try {
//     const result = await axios.get(`${API_URL}/characters/${character}`);
//     res.send(result.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Character not found or server error" });
//   }  
// });

// GET route for character data
app.get("/characters/:id", async (req, res) => {
  const characterId = req.params.id;
  console.log(`Received Id: ${characterId}`)
  try {
    const result = await axios.get(`${API_URL}/characters/${characterId}`);
    res.send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No character data founds" });
  }
});


// Test GET route
// app.get("/character-search-test", async (req, res) => {
//   try {
//     const result = await axios.get(`${API_URL}/characters/ganyu`);
//     res.send(result.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch test character" });
//   }
// });

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
