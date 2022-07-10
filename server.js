const express = require("express");
const app = express();
const cors = require("cors");
const { request, response } = require("express");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectString = process.env.DB_STRING,
  dbName = "star-wars-quotes",
  collection = "";

MongoClient.connect(dbConnectString).then((client) => {
  console.log("Connected to DB");
  db = client.db(dbName);
  collection = db.collection("quotes");
});

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/public"));

// Get
app.get("/", async (request, response) => {
  try {
    response.render("index.ejs");
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// Check env
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on.`);
});
