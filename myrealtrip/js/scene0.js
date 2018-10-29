
//scene0 스크립트


$(document).ready(function() {
   
    $(window).scroll(function() {
       
        var winHt = $(document).scrollTop();
        
        if(winHt>100) {
            $("#scene0, .scene.nf")
                .addClass("scroll");
            
            $("#scene0 video")
                .removeAttr("loop")
                .attr("muted", "");
            
            $(".wrap")
                .css("margin-top", "180px");
            
        } else {
            $("#scene0, .scene.nf")
                .removeClass("scroll");
            
            $(".wrap")
                .css("margin-top", "0px");
        };
        
    });
    
    
    $()
    
});