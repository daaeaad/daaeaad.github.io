

// #scene1 이벤트

//////////////////////////////////////
// 비주얼 텍스트 이벤트

$(document).ready(function() {
    
    
    var i = 0;
    
    function fCnt() {
        i++;
        
        if(i==6) {
            clearInterval(txt_intv);
        }
    }
    
    var txt_intv = setInterval(function() {
       txtEvent(); 
    }, 4000);
    
    function txtEvent() {
        $("#scene1 .vsTxt")
            .addClass("txtEvent");
    }
        
});

//////////////////////////////////////


//////////////////////////////////////
// 비주얼 텍스트 이벤트

$(document).ready(function() {
   
    var vsWd = parseInt($("#scene1 .vsItem").width());
    
    setTimeout(function() {
       
        vs_intv();
        
    }, 3800);
    
    function vs_intv() {
        setInterval(function() {
        vsSldAni();
    }, 3600);
    }
    
//    var vs_intv = setInterval(function() {
//        vsSldAni();
//    }, 3600);
    
    function vsSldAni() {
        $("#scene1 .vsBox")
            .not(":animated")
            .animate({"margin-left":vsWd*-1+"px"},600,function() {
           $("#scene1 .vsItem")
            .eq(0)
            .appendTo($("#scene1 .vsBox"));
            $("#scene1 .vsBox")
                .css("margin-left", "0");
        });
    }
    
});

//////////////////////////////////////