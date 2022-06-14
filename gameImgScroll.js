
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();

        if(scroll_pos >= $("#gameImg").height()*0.4) {
          $("#gameImg").fadeOut(1000);
        } 
        else {
          $("#gameImg").fadeIn(800);
        }
        
	});

});