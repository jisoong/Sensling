
$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();

			// if(scroll_pos <= $("#diaryImg").height()*0.2) {
      //     $("#diaryImg").animate({'opacity':'1'}, 10)
			// } 
      // else if(scroll_pos <= $("#diaryImg").height()*0.4 && scroll_pos > $("#diaryImg").height()*0.2) {
      //   $("#diaryImg").animate({'opacity':'0.8'}, 10)
      // }
      // else if(scroll_pos <= $("#diaryImg").height()*0.6 && scroll_pos > $("#diaryImg").height()*0.4) {
      //   $("#diaryImg").animate({'opacity':'0.6'}, 10)
      // } 
      // else if(scroll_pos <= $("#diaryImg").height()*0.8 && scroll_pos > $("#diaryImg").height()*0.6) {
      //   $("#diaryImg").animate({'opacity':'0.4'}, 10)
      // }
      // else if(scroll_pos <= $("#diaryImg").height() && scroll_pos > $("#diaryImg").height()*0.8) {
      //   $("#diaryImg").animate({'opacity':'0.2'}, 10)
      // }
      // if(scroll_pos > $("#diaryImg").height()) {
      //   $("#diaryImg").animate({'opacity':'0'}, 10)
      // }
        if(scroll_pos >= $("#diaryImg").height()*0.4) {
          $("#diaryImg").fadeOut(2000);
        } 
        else {
          $("#diaryImg").fadeIn(800);
        }
	});

});