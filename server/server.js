const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helpers = require("../helpers.js");
const port = "3000";

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/main")));

app.post("/planets", (req, res) => {
  helpers.getPlanets(req.body.data, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(JSON.stringify(result));
    }
  });
});

app.listen(port, () => {
  console.log("listening on " + port);
});
