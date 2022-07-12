const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

// const express = require("express");
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good Post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
