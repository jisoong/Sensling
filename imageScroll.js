
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();
      console.log(scroll_pos)
      if(scroll_pos >= $("#diaryImg").height()*0.4) {
        $("#diaryImg").fadeOut(4000);
      } 
      else {
        $("#diaryImg").fadeIn(2000);
      }
        
	});

});