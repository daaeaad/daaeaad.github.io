

//gnb 메뉴 버튼 인터랙션

$(document).ready(function() {

$(".gnbBtnSec #gnbBtn").hover(function() {
       
        $(this)
            .addClass("hvr");
    });
    
    $(".gnbBtnSec #gnbBtn.clk").hover(function() {
        $(this)
            .removeClass("hvr");
    });
    
    $(".gnbBtnSec #gnbBtn").mouseleave(function() {
       
        $(this)
            .removeClass("hvr");
    });
    
    $(".gnbBtnSec #gnbBtn").click(function() {
       
        $("#mainGnb")
            .fadeToggle(500);
        
        $("body")
            .toggleClass("rock");
        
        $(this)
            .removeClass("hvr")
            .toggleClass("clk");
        
        $("#hd .contactBtn, .footer .sldBtnSec ul, .scrBtnSec .scrBtn, .topBtnSec, #pf_scene1 .pfMainTxtSec .sldCtrBtnSec")
            .fadeToggle(400);
        
    });
    
});