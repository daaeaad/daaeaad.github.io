
//  페이지네이션


$(document).ready(function() {
    


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
         };
           
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
    
    
    
});