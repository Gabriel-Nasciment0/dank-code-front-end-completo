const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.listen("3000", () => {
    console.log("servidor rodando");
});

//body parser
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("index", {});
});
app.get("/sobre", function (req, res) {
    res.render("sobre", {});
});
