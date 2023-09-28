$(function () {
    $("#teste").css("background", "gray");
    $(".artigo01").css("padding", "20px");
    setTimeout(function () {
        $(".artigo01 > p").css("color", "red");
    }, 2000);
});
