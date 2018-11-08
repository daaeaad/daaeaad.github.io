//scene0 - fix영역 js


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
    
    
//    $(window).scroll(function() {
//       
////        현재 스크롤값
//        var scTop = $(window).scrollTop();
//        var winHt3 = winHt*2-300;
//        
//        if(scTop < winHt) {
//            $(".footer .sldBtnSec .sldBtn")
//                .eq(0)
//                .siblings()
//                .removeClass("on");
//            
//            $(".footer .sldBtnSec .sldBtn")
//                .eq(0)
//                .addClass("on");
//            
//        } else if (scTop = winHt) {
//            $(".footer .sldBtnSec .sldBtn")
//                .eq(1)
//                .siblings()
//                .removeClass("on");
//            
//            $(".footer .sldBtnSec .sldBtn")
//                .eq(1)
//                .addClass("on");
//            
//        } else if (scTop > 1200) {
//            $(".footer .sldBtnSec .sldBtn:nth-child(3)")
//                .siblings()
//                .removeClass("on");
//            
//            $(".footer .sldBtnSec .sldBtn:nth-child(3)")
//                .addClass("on");
//        };
//        
//    });
    
    
    $(window).scroll(function(){
        
        var sct = parseInt($(window).scrollTop()); 
        var eq = parseInt(sct/winHt);
        
        $(".footer .sldBtnSec .sldBtn")
            .removeClass("on");
        
        $(".footer .sldBtnSec .sldBtn")
            .eq(eq)
            .siblings()
            .removeClass("on"); 

        $(".footer .sldBtnSec .sldBtn").eq(eq).addClass("on"); 
        
        
        if(sct > 300) {
            $(".topBtnSec .topBtn")
                .addClass("on");
            
        } else {
            $(".topBtnSec .topBtn")
                .removeClass("on");
        }
            
        if(sct>winHt) {
            
            $("#hd .contactBtn, .scrBtnSec .scrBtn")
                .fadeOut(400);
            
         } else {
             $("#hd .contactBtn, .scrBtnSec .scrBtn")
                .fadeIn(400);
         }
           
    });
    
    
    $(".footer .sldBtnSec .sldBtn").click(function() {
       
        var sldBtnIndex = $(this).index();
        
        $(this)
            .siblings()
            .removeClass("on");
        
        $(this)
            .addClass("on");
        
        $("body, html")
            .not(":animated")
            .animate({"scrollTop":winHt*sldBtnIndex},500);
        
    });
    
    
    
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
        
        $(this)
            .removeClass("hvr")
            .toggleClass("clk");
        
        $("body, html")
            .toggleClass("rock");
        
        $("#hd .contactBtn, .footer .sldBtnSec ul, .scrBtnSec .scrBtn, .topBtnSec, #pf_scene1 .pfMainTxtSec .sldCtrBtnSec")
            .fadeToggle(400);
        
    });
    
    
    
    $("#mainGnb .mainMenu a").hover(function() {
       
        $(this)
            .addClass("hvr");
        
    });
    
    $("#mainGnb .mainMenu a").mouseleave(function() {
       
        $(this)
            .removeClass("hvr");
        
    });
    
    
    
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
    
    
    
    
    $("#scene3 .conBtnSec .moreBtn, #scene3 .conBtnSec .sendBtn, .header .contactBtn .btn").hover(function() {
        
        $(this)
            .addClass("hvr");

    });
    $("#scene3 .conBtnSec .moreBtn, #scene3 .conBtnSec .sendBtn, .header .contactBtn .btn").mouseleave(function() {
       
        $(this)
            .removeClass("hvr");
        
    });
    
    
    $("#hd .contactBtn").click(function() {
       
        $("body, html")
            .not(":animated")
            .animate({"scrollTop":winHt*3+"px"},500);
        
    });
    
});










