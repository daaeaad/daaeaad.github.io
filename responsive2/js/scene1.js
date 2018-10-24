

/****************************************************/
/*  #scene1 js  */


/*  비주얼 슬라이드 js  */
$(document).ready(function() {
    
//    이미지 하나당 너비
    var vsWd = parseInt($("#scene1 .vsFrame").width());
//    -1
    var minus = -1;
    
//    이미지 개수 =3개
    var vsCnt = $("#scene1 .vsImg").length;
    
//    이미지 슬라이딩 애니메이션 셋인터발
    var vsIntv = setInterval(function() {
        vsAni();
    }, 3000);
    
//    현재 가장 앞에 있는 이미지의 데이터밸류
    var currentImgValue;
    
//    이미지 슬라이딩 애니메이션
    function vsAni() {
      
        $("#scene1 .vsBox")
            .not(":animated")
            .animate({"margin-left":vsWd*minus+"px"}, 400, function() {
           
            $("#scene1 .vsImg")
                .eq(0)
                .appendTo($("#scene1 .vsBox"));
            
            $("#scene1 .vsBox")
                .css("margin-left", "0px");
            
        });
        
    };
    
    
    $("#scene1 .vsBtnBox button").click(function() {
       
        clearInterval(vsAni);
        
        //        현재 eq(0)인 이미지의 data-value값
            var currentImgValue = $("#scene1 .vsImg").eq(0).attr("data-value");
        
        var btnValue = parseInt($(this).attr("data-value"));
        
        $(this)
            .siblings("button")
            .removeClass("on");
        
        $(this)
            .addClass("on");
        
        
    });
    
});


/*  #scene1 js  */
/****************************************************/