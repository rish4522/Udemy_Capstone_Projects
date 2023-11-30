$(document).ready(function () {
    $("nav input").click(function () {
        $("nav input").addClass("pressed");
        $(".nav-search").addClass("nav-search-pressed");
    });

    $("nav input").focusout(function () {
        $("nav input").removeClass("pressed");
        $(".nav-search").removeClass("nav-search-pressed");
    });

});
