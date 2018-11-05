



//스플래쉬 화면 스크립트



$(document).ready(function() {
   
   
    $("body")
        .addClass("rock");
    
    setTimeout(function() {
       
        $("#scene_splash")
            .fadeOut(500);
        
        $("body")
            .removeClass("rock");
        
    }, 400);
    
});