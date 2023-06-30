const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));

app.get("/", (req, res) => {
  res.send("Welcome to our Home Page");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.... ");
});
