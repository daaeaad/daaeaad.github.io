
//#scene2 영역 이벤트


$(document).ready(function() {

    $(window).scroll(function() {

        var winSc_value = $(document).scrollTop();

        if(winSc_value > 150) {
            $("#scene2 .vsVideoSec")
                .addClass("active");
        } else {
            $("#scene2 .vsVideoSec")
                .removeClass("active");
        };

    });

});


$(document).ready(function() {

    $(window).scroll(function() {

        var winSc_value = $(document).scrollTop();

        if(winSc_value > 210) {
            $("#scene2 .newProSec")
                .addClass("active");
            $("#scene2 .newPro")
                .addClass("active");

        } else {
            $("#scene2 .newProSec")
                .removeClass("active");
            $("#scene2 .newPro")
                .removeClass("active");
        };

    });

});