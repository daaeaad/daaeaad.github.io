
//////////////////////////////////////////
//헤더영역 제이쿼리 ////////////////////////



//헤더 스크롤시 제이쿼리
$(document).ready(function() {
   
    $(window).scroll(function() {
       
        var winHt = $(document).scrollTop();
        
        if(winHt>100) {
            $("#hd")
                .addClass("scroll");
        } else {
            $("#hd")
                .removeClass("scroll");
        };
        
    });
    
});



//데스크탑 - 메뉴바
$(document).ready(function() {
   
    $("#hd #gnb.desktop .mainMenu").on("mouseover", function() {
       
        $("#hd")
            .addClass("menuBg_forDesktop");
        
        $("#hd #gnb.desktop .subMenuSec")
            .stop()
            .fadeIn(100);
    });
    
    $("#hd #gnb.desktop .subMenu").on("mouseover", function() {
       
        $(this)
            .find(".detailMenuSec")
            .stop()
            .slideDown(300);
    });
    
    
    $("#hd #gnb.desktop .mainMenu").mouseleave(function() {
       
        $("#hd")
            .removeClass("menuBg_forDesktop");
        
        $("#hd #gnb.desktop .subMenuSec")
            .stop()
            .fadeOut(100);
    });
    
    $("#hd #gnb.desktop .subMenu").mouseleave(function() {
       
        $(this)
            .find(".detailMenuSec")
            .stop()
            .slideUp(300);
    });
    
});




//헤더영역 제이쿼리 끝 //////////////////////
//////////////////////////////////////////