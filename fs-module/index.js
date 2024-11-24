const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("response ended!!");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
