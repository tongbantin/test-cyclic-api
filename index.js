const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
app.listen(PORT, () => {
  console.log("PORT " + PORT);
});
