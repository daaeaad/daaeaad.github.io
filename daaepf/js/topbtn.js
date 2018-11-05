




// 탑버튼 인터랙션 및 기능


$(document).ready(function() {


$(".topBtnSec .topBtn").hover(function() {
        $(this)
            .addClass("hvr");
    });
    
    $(".topBtnSec .topBtn").mouseleave(function() {
        $(this)
            .removeClass("hvr");
    });
    
    $(".topBtnSec .topBtn").click(function() {
        $("body, html")
            .not(":animated")
            .animate({"scrollTop":"0"});
    });
    
});