const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db = "",
  dbConnectString = process.env.DB_STRING,
  dbName = "star-wars-quotes",
  collection = "";

MongoClient.connect(dbConnectString).then((client) => {
  console.log("Connected to DB");
  db = client.db(dbName);
  collection = db.collection("quotes");
});
