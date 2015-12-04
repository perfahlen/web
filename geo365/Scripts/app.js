$(document).ready(function () {

    var initApp = function () {
        var timeOutId = setTimeout(function () {
            var video = document.querySelector("video");
            video.playbackRate = 0.3;
        }, 1000);
    }();

    $("#burger").on("click", function () {
        var visibleMenu = document.querySelector("#burgerNav").style.display;
        if (visibleMenu === "" || visibleMenu === "none") {
            $("#burgerNav").show();
        } else {
            $("#burgerNav").hide();
        }
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });
});