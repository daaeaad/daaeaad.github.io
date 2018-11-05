




//헤더 컨택버튼 기능 
//    (컨택페이지가 아닐 경우 화면 최하단으로 내려가기)


$(document).ready(function() {

    $("#hd .contactBtn").click(function() {
       
        $("body, html")
            .not(":animated")
            .animate({"scrollTop":winHt*3+"px"},500);
        
    });
    
    
});