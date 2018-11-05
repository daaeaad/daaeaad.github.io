


//포트폴리오 페이지



//포폴리스트 슬라이딩 스크립트

$(document).ready(function() {
   
    $("#pf_scene1 .sldLrBtn button").hover(function(){
        
        $(this)
            .addClass("hvr");
    });
    $("#pf_scene1 .sldLrBtn button").mouseleave(function(){
        
        $(this)
            .removeClass("hvr");
    });

    
//    
////    vsFrame 너비 = 100%
//    var vsWidth = parseInt($("#pf_scene1 .pfMainVsFrame").width());
//    
////    vsImg 개수 = 8
//    var cnt = $("#pf_scene1 .pfMainVsFrame .pfMainVsImg").length;
//    
//    var maxAni = (cnt-1)*vsWidth*-1;
//    
//    
//    $("#pf_scene1 .sldLrBtn.right button").click(function(){
//        
//        var mar = parseInt($("#pf_scene1 .pfMainVsFrame ul").css("margin-left"));
//        
//        if(mar > maxAni) {
//            
//            $("#pf_scene1 .pfMainVsFrame ul")
//                .not(":animated")
//                .animate({"margin-left" : "-="+vsWidth+"px"}, 500);
//        }
//    });
//    $("#pf_scene1 .sldLrBtn.left button").click(function(){
//        
//        var mar = parseInt($("#pf_scene1 .pfMainVsFrame ul").css("margin-left"));
//        
//        if(mar < 0) {
//            $("#pf_scene1 .pfMainVsFrame ul")
//                .not(":animated")
//                .animate({"margin-left" : "+="+vsWidth+"px"}, 500);
//        }
//    });
//    
//    
//    
//    
//    $("#pf_scene1 .pfMainTxtSec .sldCtrBtn").click(function() {
//       
//        var sldCrtBtneq = $(this).index();
//        
//        var mar = parseInt($("#pf_scene1 .pfMainVsFrame ul").css("margin-left"));
//        
//        $(this)
//            .siblings()
//            .removeClass("clk");
//        
//        $(this)
//            .addClass("clk");
//        
//        $("#pf_scene1 .pfMainVsFrame ul")
//            .not(":animated")
//            .animate({"margin-left" : vsWidth*sldCrtBtneq*-1+"px"}, 500);
//        
////        if(mar == 0) {
////            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
////                .eq(0)
////                .siblings()
////                .removeClass("clk");
////            
////            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
////                .eq(0)
////                .addClass("clk");
////            
////        } else if (mar == vsWidth*-1) {
////            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
////                .eq(1)
////                .siblings()
////                .removeClass("clk");
////            
////            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
////                .eq(1)
////                .addClass("clk");
////        };
////        
//    });
    
    
    
//    function anal1(){
//        $("#pf_scene1 .sldLrBtn.left button").css("display", "none");
//    };
//    function anal2(){
//        $("#pf_scene1 .sldLrBtn.left button").fadeIn();
//    };
//    
//    function anal3(){
//        $("#pf_scene1 .sldLrBtn.right button").css("display", "none");
//    };
//    function anal4(){
//        $("#pf_scene1 .sldLrBtn.right button").fadeIn();
//    };
//    
//    anal1();
    
    $("#pf_scene1 .sldLrBtn.left button").click(function() {
       
//        현재 보여지고 있는 이미지의 eq값
        var curImgEq = $("#pf_scene1 .pfMainVsFrame .pfMainVsImg.on").index();
        
        if(curImgEq >= 0) {
            $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
                .eq(curImgEq)
                .removeClass("on");
            
            $("#pf_scene1 .pfMainTxtSec ul.txtItem")
                .eq(curImgEq)
                .removeClass("on");
            
            $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
                .eq(curImgEq-1)
                .addClass("on");
            
            $("#pf_scene1 .pfMainTxtSec ul.txtItem")
                .eq(curImgEq-1)
                .addClass("on");
            
            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
                .eq(curImgEq)
                .removeClass("clk");
            
            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
                .eq(curImgEq-1)
                .addClass("clk");
        }
        
//        if(curImgEq-1 > 0){
//            anal2();
//        } else {
//            anal1();
//        }
//        
//        if(curImgEq-1 > 0){
//            anal4();
//        } else {
//            anal3();
//        }
        
    });
    
    $("#pf_scene1 .sldLrBtn.right button").click(function() {
       
//        현재 보여지고 있는 이미지의 eq값
        var curImgEq = $("#pf_scene1 .pfMainVsFrame .pfMainVsImg.on").index();
        
        if(curImgEq < 5) {
            $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
                .eq(curImgEq)
                .removeClass("on");
            
            $("#pf_scene1 .pfMainTxtSec ul.txtItem")
                .eq(curImgEq)
                .removeClass("on");
            
            $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
                .eq(curImgEq+1)
                .addClass("on");
            
            $("#pf_scene1 .pfMainTxtSec ul.txtItem")
                .eq(curImgEq+1)
                .addClass("on");
            
            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
                .eq(curImgEq)
                .removeClass("clk");
            
            $("#pf_scene1 .pfMainTxtSec .sldCtrBtn")
                .eq(curImgEq+1)
                .addClass("clk");
        }
//        if(curImgEq+1 > 0){
//            anal2();
//        } else {
//            anal1();
//        }
//        
//        if(curImgEq+1 > 0){
//            anal4();
//        } else {
//            anal3();
//        }
    });
    
    
    $("#pf_scene1 .pfMainTxtSec .sldCtrBtn").click(function() {

        var sldCrtBtneq = $(this).index();

        $(this)
            .siblings()
            .removeClass("clk");

        $(this)
            .addClass("clk");
        
        $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
            .eq(sldCrtBtneq)
            .siblings()
            .removeClass("on");
        
        $("#pf_scene1 .pfMainVsFrame .pfMainVsImg")
            .eq(sldCrtBtneq)
            .addClass("on");
        
        $("#pf_scene1 .pfMainTxtSec ul")
            .eq(sldCrtBtneq)
            .siblings()
            .removeClass("on");
        
        $("#pf_scene1 .pfMainTxtSec ul")
            .eq(sldCrtBtneq)
            .addClass("on");
            

    });


    
    
    
    $("#pf_scene1 .pfMainTxtSec .webLink").click(function() {
        
        var webLinkVal = $(this).attr("page-value");
        console.log(webLinkVal);
        $("#pf_scene1 .webPopSec")
            .fadeIn(500);
        
        if(webLinkVal >= 0) {
            $(".popUpWindow")
                .eq(webLinkVal-1)
                .fadeIn(500);
        }
    });
    
    $("#pf_scene1 .webPopSec .popClose").click(function() {
       
        $("#pf_scene1 .webPopSec")
            .fadeOut(200);
    });
    

    
});