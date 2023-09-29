$(function () {
    $(".artigo01").click(function () {
        $(".artigo02").css("background", "purple");
    });
    $(".artigo02").hover(
        function () {
            $(".artigo01").css("background", "red");
        },
        function () {
            $(".artigo01").css("background", "none");
        }
    );
    function validarformulario() {
        $("select").change(function () {
            console.log("select alterado");
        });
    }
    validarformulario();
});
