const fs = require("fs");
const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
const portNumber = 3000;

nunjucks.configure("public/views", { autoescape: true, express: app });
app.use(express.static(path.join(__dirname, "public", "static")));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get("/", (req, res) => {
  nunjucks.render("index.html");
  res.render("index.html");
});

app.listen(portNumber);
console.log(new Date().toLocaleString("pl-PL", { hour12: false }) + ", starting server on port:", portNumber);
