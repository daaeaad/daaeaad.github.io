//////////////////////////////////////////
//메뉴영역 제이쿼리 ////////////////////////



//메뉴 선택시 스크롤다운, 토글클래스 제이쿼리
$(document).ready(function() {
   
    $("#scene0_1 .menuName").click(function() {
       
        $(this)
            .parents("li.mainMenu")
            .siblings("li.mainMenu")
            .removeClass("select");
        
        $(this)
            .parents("li.mainMenu")
            .siblings("li.mainMenu")
            .find(".subMenuSec")
            .slideUp(500);
        
        $(this)
            .parents("li.mainMenu")
            .toggleClass("select")
            .find(".subMenuSec")
            .slideToggle(500);
        
    });
    
});



//메뉴 선택시 스크롤다운, 토글클래스 제이쿼리
$(document).ready(function() {
   
    $("#hd .menuBtn").click(function() {
       
        $("#scene0_1")
            .addClass("open");
        
        $("body")
            .addClass("rock");
        
    });
    
    $("#scene0_1 .menuBtn").click(function() {
       
        $("#scene0_1")
            .removeClass("open");
        
        $("body")
            .removeClass("rock");
        
    });
    
});




//메뉴영역 제이쿼리 끝 //////////////////////
//////////////////////////////////////////