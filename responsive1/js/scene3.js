/* #scene3 영역 제이쿼리 */


/* 버튼 클릭시 해당 카드로 슬라이딩 제이쿼리 */

$(document).ready(function() {
    
    $("#scene3 .sldBtn").click(function() {
       
        var pgVal = parseInt($(this).attr("page-value"));
        
        var nWd = $("#scene3 .news").width();
        
        $(this)
            .siblings("button")
            .removeClass("on");
        
        $(this)
            .addClass("on");
        
        $("#scene3 .newsBox")
            .not(":animated")
            .animate({"margin-left":nWd*(pgVal-1)*-1+60+"px"});
        
    });
    
});