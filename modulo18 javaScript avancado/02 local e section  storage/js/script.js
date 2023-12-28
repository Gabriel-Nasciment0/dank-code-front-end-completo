window.onload = function () {
    if (typeof Storage !== "undefined") {
        console.log("o navegador e compativel");
    } else {
        console.log("o navegador não e compativel");
    }
};
function initialize() {
    if (sessionStorage.getItem("nome") !== null) {
        alert("Olá, " + sessionStorage.nome + ", Seja bem vindo de volta");
    } else {
        alert("bem vindo essa e sua primeira visita no nosso site");
        sessionStorage.nome = "gabriel";
    }
}
//por algum motivo n funciona