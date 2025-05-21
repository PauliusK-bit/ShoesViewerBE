const express = require("express");
const path = require("path");
const process = require("process");
require("dotenv").config();
require("./db");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const shoeAPIRoutes = require("./api/shoeRoutes");

app.use("/api/shoes", shoeAPIRoutes);

app.use(express.static("public"));

app.locals.siteTitle = "My Website";
app.locals.currentDate = new Date().getFullYear();

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
