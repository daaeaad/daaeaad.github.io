




//gnb버튼 클릭시 메뉴 오픈




$(document).ready(function() {

$("#mainGnb .mainMenu a").hover(function() {
       
        $(this)
            .addClass("hvr");
        
    });
    
    $("#mainGnb .mainMenu a").mouseleave(function() {
       
        $(this)
            .removeClass("hvr");
        
    });
    
});