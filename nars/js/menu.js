

////////////////////////////////////////
//메뉴 영역 오픈 이벤트

$(document).ready(function() {
    
    $("#hd #menuOpen").click(function() {
     
        // 메뉴 영역 오픈
        $("#hd .menuBlackBg")
             .toggleClass("toggleOpen")
             .fadeIn(500);
        
        // 메뉴 버튼 클로즈버튼으로
        $("#hd .iconSec")
            .delay(500)
            .toggleClass("menuClose");
        
        
        // 투명도 블랙 배경 페이드인
        $("#allBlackBg")
            .fadeToggle(300);
        
        $("body")
            .toggleClass("rock");
       
    });
    
    
});

///////////////////////////////////////



///////////////////////////////////////
// 검색창 선택시 이벤트

$(document).ready(function() {
   
    $("#hd #searchBtn").click(function() {
       
        $("#hd .searchForm")
            .toggleClass("on");
        
    });
    
});

//////////////////////////////////////



///////////////////////////////////////
// 선택된 메인메뉴의 해당 서브메뉴 오픈 이벤트

$(document).ready(function() {
   
    $("#hd .menu").click(function() {
       
        
//        선택된 메뉴의 해당 서브메뉴 높이값
        var subHt = parseInt($(this).find(".subMenuSec").height());
        
        
        
        $(this)
            .siblings(".menu")
            .removeClass("select")
            .find(".subMenuSec")
            .slideUp(500);
        
        
        
//        if($(this) == $("#hd .menu:nth-child(1)")) {
//            
//            $(this)
//                .siblings(".menu:nth-child(2)")
//                .animate({"margin-top":subHt+"px"},500);
//            
//            $(this)
//                .siblings(".menu:nth-child(3)")
//                .animate({"margin-top":"0px"},500);
//            
//            
//        } else if($(this) == $("#hd .menu:nth-child(2)")) {
//            
//            $(this)
//                .siblings(".menu:nth-child(3)")
//                .animate({"margin-top":subHt+"px"},500);
//            
//            $(this)
//                .animate({"margin-left":"0px"},500);
//        }
//        
        
        
        $(this)
            .find(".subMenuSec")
            .slideDown(500);
        
        $(this)
            .addClass("select");
        
    });
    
});

//////////////////////////////////////



///////////////////////////////////////
// 선택된 메인메뉴의 해당 서브메뉴 오픈 이벤트

$(document).ready(function() {
   
    $("#hd .subMenu > ul").click(function() {
       
        $(this)
            .siblings()
            .removeClass("select");
        
        $(this)
            .addClass("select");
        
    });
    
    
    $("#hd .subMenu > ul").click(function() {
       
        $(this)
            .siblings()
            .find(".detailMenuSec")
            .slideUp(500);
        
        $(this)
            .find(".detailMenuSec")
            .slideDown(500);
        
    });
    
});

///////////////////////////////////////





