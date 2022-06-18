
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();
      // console.log(scroll_pos)
      if(scroll_pos >= $("#gameImg").height()*0.4) {
        $("#gameImg").fadeOut(4000);
      } 
      else {
        $("#gameImg").fadeIn(2000);
      }
        
	});

});