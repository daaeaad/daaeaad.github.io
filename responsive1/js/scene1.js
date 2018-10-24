/* #scene1 영역 제이쿼리 */

/*****************************************/
/* vs 슬라이딩 */
$(document).ready(function() {
   
    var vsWd = parseInt($("#scene1 .vsFrame").width());
    
    var vsCnt = $("#scene1 .vsImg").length;
    
    var vsImgEq;
    var vsBtnEq;
    
    
    $("#scene1 .vsBtn").click(function() {
       
        var vsBtnEq = $(this).index()*-1;
        
        $(this)
            .siblings("button")
            .removeClass("on");
        
        $(this)
            .addClass("on");
        
        $("#scene1 .vsBox")
            .not(":animated")
            .animate({"margin-left":vsWd*vsBtnEq+"px"},500);
        
    });
    
    
    
////    순환형 슬라이딩
//    function rightAni() {
//      
//        $("#scene1 .vsBox")
//            .not(":animated")
//            .animate({"margin-left":vsWd*-1+"px"}, 500, function() {
//            $("#scene1 .vsImg")
//                .eq(0)
//                .appendTo($("#scene1 .vsBox"));
//            
//            $("#scene1 .vsBox")
//                .css("margin-left", "0px");
//        });
//        
//    }
//    
    
});


/* vs 슬라이딩 끝 */
/*****************************************/



/*****************************************/
/* scroll버튼 */

$(document).ready(function() {
   
    
    
    $("#scene1 .scrBtn").click(function() {
       
        var winHt = parseInt($(window).height());
        
        $("html, body")
            .animate({
            scrollTop:winHt
        }, 400);
        
        return false;
        
    });
    
});

/* scroll버튼 끝 */
/*****************************************/




