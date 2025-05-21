import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));  
const API_URL = "https://genshin.jmp.blue";

app.set("view engine", "ejs");      // Load EJS templates

/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/
// Get Homepage
app.get("/", (req, res) => {
    try{
        res.send("Hi")
    }catch(error) {
        console.log(error);
    }
});

// Handle Character Query
app.post("/character-search", async (req, res) => {
    const character = req.body.character.toLowerCase().replace(" ", "-");
    try{
        const result = await axios.get(API_URL + "/characters/" + character);
        res.send(result.data);
    }catch(error) {
        console.log(error);
    }
});

// TESTING
app.get("/character-search-test", async (req, res) => {
    try{        
        const result = await axios.get(API_URL + "/characters/ganyu");
        res.send(result.data);
    }catch(error) {
        console.log(error);
    }
});

/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen( port, () => {
    console.log(`Server started on port ${3000}`);
});