/* EFECTO DEL MENÚ */

$(document).ready(function() {
    $("li").mouseenter(function () {
        $(this).animate({
            boxShadow: '0 0 50px black',
            backgroundColor: "white"
        }, 600);

        $(this).mouseleave(function () {
            $(this).animate({
                boxShadow: '0 0 0px black',
                backgroundColor: "#819142"
            }, 600);
        });
    });
});
