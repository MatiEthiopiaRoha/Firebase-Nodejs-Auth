const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Routes
const authRoutes = require("./routes/auth");

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);

// PORT
const port = 5000;

// Starting a server
app.listen(port, () => {
  console.log(`Server Started On PORT ${port}`);
});
