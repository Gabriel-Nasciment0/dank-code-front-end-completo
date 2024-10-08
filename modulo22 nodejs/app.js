const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

app.listen("3000", () => {
    console.log("servidor rodando");
});

//body parser
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//conecxao com o banco
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
});
db.connect(function (err) {
    if (err) {
        console.log("Erro no banco de dados");
    }
});

app.get("/", function (req, res) {
    let query = db.query("select * from clientes", function (err, results) {
        res.render("index", { lista: results });
    });
});

app.get("/registrar", function (req, res) {
    res.render("cadastro", {});
});
app.post("/registrar", function (rec, res) {
    console.log("cadastro realizado com sucesso");
    let nome = rec.body.nome;
    let sobrenome = rec.body.sobrenome;
    let empresa = rec.body.empresa;
    db.query(
        "INSERT INTO clientes(nome,sobrenome,empresa) VALUE(?,?,?,)",
        [nome, sobrenome, empresa],
        function (err, results) {}
    );
    res.render("cadastro", {});
});
