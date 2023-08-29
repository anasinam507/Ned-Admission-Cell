const { connect } = require("mongoose");
const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

app.use("/api/NAC", require("./router"));


app.get("/", (req, res) => {
  res.send("Hello harry");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});