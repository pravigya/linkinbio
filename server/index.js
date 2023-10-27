const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
