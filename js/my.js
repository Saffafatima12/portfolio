$(document).ready(function(){

        tply.animate(
            document.getElementById("tply-source"),
            document.getElementById("tply-destination")
        );

        $("#fullpage").addClass("gradColor");
        var body = $('.gradColor');
        var colors = ['#dda05a', '#7a9b84', '#f2ef88'];
        var currentIndex = 1;
        setInterval(function () {
        body.css({
        backgroundColor: colors[currentIndex]
        });
        if (!colors[currentIndex]) {
        currentIndex = 0;
        } else {
        currentIndex++;
        }
        }, 3000);

    $("#switch").click(function () {
        if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#fullpage").addClass("gradColor");
        $("#switch").removeClass("switched");
        }
        else {
        $("#fullpage").removeClass("gradColor");
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");
        }

    });
});