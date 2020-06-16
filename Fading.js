
$(document).ready(function(){
    $(window).scroll(function(){
        var percent = $(document).scrollTop()  / 200;
        
        if ($(this).scrollTop() > 20){
            $(".fond1").css("opacity",1 - percent); 
        }
          else {
            $(".fond1").css({"opacity" : "1"});
        }
    })
})