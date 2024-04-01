const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.listen("3000", () => {
    console.log("servidor rodando");
});
//Body Parser
app.set("view engine", "ejs");
app.set("vielw", path.join("__dirname", "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req ,res){
    res.render('index',{})
})