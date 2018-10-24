



/*************************************************************/
/* 헤더 js */


$(document).ready(function() {
   
    $("#hd .mainMenu").on("mouseover", function() {
       
        $(this)
            .siblings("li.mainMenu")
            .removeClass("mHover");
        $(this)
            .addClass("mHover");
        
        
        $(this)
            .siblings("li.mainMenu")
            .find(".subGnb")
            .stop()
            .slideUp(300);
        $(this)
            .find(".subGnb")
            .stop()
            .slideDown(400);
        
    });
    
    $("#hd .mainMenu").mouseleave(function() {
       
        $(this)
            .removeClass("mHover");
        
        $(this)
            .find(".subGnb")
            .stop()
            .slideUp(300);
        
    });
    
    
    $("#hd .subMenu").on("mouseover", function() {
       
        $(this)
            .siblings(".subMenu")
            .removeClass("hover");
        $(this)
            .addClass("hover");
        
    });
    
    $("#hd .subMenu").mouseleave(function() {
       
        $(this)
            .removeClass("hover");
        
    });
    
});


/* 헤더 js 끝 */
/*************************************************************/