

//   scene1 스크립트



$(document).ready(function() {
   
    $("#scene1 .tabBtn").click(function() {
       
        var dtVal = parseInt($(this).attr("data-value"));
        
        $(this)
            .siblings("li.tabBtn")
            .find("button")
            .removeClass("ko_eb");
        
        $(this)
            .find("button")
            .addClass("ko_eb");
        
        
        $("#scene1 .sceneCon")
            .eq(dtVal-1)
            .siblings("div.sceneCon")
            .not(":animated")
            .css("display", "none");
        
        $("#scene1 .sceneCon")
            .eq(dtVal-1)
            .not(":animated")
            .fadeIn(400);
        
    });
    
});