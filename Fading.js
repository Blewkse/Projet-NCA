
$(document).ready(function(){
    
    $(window).scroll(function(){
        console.log($(document).scrollTop());
        var percent = $(document).scrollTop()  / 400;
        
        if ($(this).scrollTop() > 20){
            $(".fond1").css("opacity",1 - percent);
            
        }
          else {
            $(".fond1").css({"opacity" : "1"});
        }
         if ($(this).scrollTop() > 390){
            $(".fond1").css("z-index","0");
            
        }
          else {
            $(".fond1").css({"z-index" : "50"});
        }
    })
})
$(document).ready(function(){
    $(window).scroll(function(){
        var percent = $(document).scrollTop()  / 400;
        
        if ($(this).scrollTop() > 100){
            $(".titrekenzo").css("opacity",1 - percent); 
        }
          else {
            $(".titrekenzo").css({"opacity" : "1"});
        }
    })
})
