
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();

        if(scroll_pos >= $("#scentImg").height()*0.4) {
          $("#scentImg").fadeOut(1000);
        } 
        else {
          $("#scentImg").fadeIn(800);
        }
        
	});

});