
//header 스크립트


$(document).ready(function() {
   
    $(window).scroll(function() {
       
        var winHt = $(document).scrollTop();
        
        if(winHt>1000) {
            $("#hd")
                .addClass("color");
            
        } else {
            $("#hd")
                .removeClass("color");
            
        };
        
    });
    
    
    $()
    
});