
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();
        if(scroll_pos >= $("#diaryImg").height()*0.4) {
          $("#diaryImg").fadeOut(2000);
        } 
        else {
          $("#diaryImg").fadeIn(800);
        }
        
	});

});