$(document).ready(function () {
    $("#hinh-ma").hover(function () {
        $(this).attr("src", "images/index_haloween.PNG");
    }, function () {
        $(this).attr("src", "images/index_haloween2.PNG");
    });
});
