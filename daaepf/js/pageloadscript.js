

$(document).ready(function() {
    
    
    
    setTimeout(function() {
       
        $("#scene11")
        .addClass("load");
        
    }, 600);
    
    
    $(window).scroll(function(){
        
        var winHt = parseInt($(window).height());
        var sct = parseInt($(window).scrollTop());
        
        
        if(sct > 500) {
            
            $("#scene12")
                .addClass("load");
            
        } else {
            $("#scene12")
                .removeClass("load");
        }
           
    });
    
    
    
});