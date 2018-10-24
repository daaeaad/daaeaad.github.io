/* toTop 버튼 제이쿼리 */


$(document).ready(function() {

    $(window).scroll(function() {
       
        var winHt = parseInt($(window).height());
        
        if($(this).scrollTop()>300) {
            $("#scene0_2")
                .fadeIn(400);
        } else{
            $("#scene0_2")
                .fadeOut(400);
        }
        
    });
    
    $("#toTop").click(function() {
       
        $("html, body")
            .animate({
            scrollTop:0
        }, 500);
        
        return false;
        
    });
    
});
