import cors from "cors";
import db from "./configs/mongoose-config.js";
import Movie from "./model/Movie.js"
import bodyParser from "body-parser"
import express from "express";


const app = express();
const port = 6060;

app.use(bodyParser.json());
app.use(cors());

db.once("open", () => {
    Movie.find({})
        .limit(1)
        .then((movies) => {
            console.log("Movies:", movies);
        })
        .catch((error) => {
            console.log("Error querying movies:", error);
        })
})

db.on("error", (error) => {
    console.log("Error connecting to database:", error);
})


app.listen(port, () => {
    console.log(`listening on`, port)
})

