


// 원페이지 스크롤링
$(document).ready(function() {
   
//    윈도우 높이값
var winHt = parseInt($(window).height());

$(window).on("mousewheel", function(e){

    if(e.originalEvent.wheelDelta < 0) {
        $("html, body")
            .not(":animated")
            .animate({
            scrollTop : "+="+winHt+"px"
        }, 800);
    } else {
        $("html, body")
            .not(":animated")
            .animate({
            scrollTop : "-="+winHt+"px"
        },800);
    }
    return false;

});
    
});