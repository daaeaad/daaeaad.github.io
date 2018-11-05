




//버튼 요소 인터랙션
//(콘텐츠버튼, 콘택버튼, 보내기버튼)

$(document).ready(function() {


$("#scene3 .conBtnSec .moreBtn, #scene3 .conBtnSec .sendBtn, .header .contactBtn .btn").hover(function() {
        
        $(this)
            .addClass("hvr");

    });
    $("#scene3 .conBtnSec .moreBtn, #scene3 .conBtnSec .sendBtn, .header .contactBtn .btn").mouseleave(function() {
       
        $(this)
            .removeClass("hvr");
        
    });
    
    
});