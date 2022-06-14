// $(window).on("scroll", function(e) {
// 	if ($(window).scrollTop() < ($("#diaryImg").height())/2) $("#diaryImg").fadeOut(10000);
// 	else if ($(window).scrollTop() < ($("#diaryImg").bottom())/2) $("#diaryImg").fadeIn(10000);
//   // else $("#diaryImg").animate({opacity:'0'},1);
// });

$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 
			scroll_pos = $(this).scrollTop();
			if(scroll_pos <= $("#diaryImg").height()*0.2) {
          $("#diaryImg").animate({'opacity':'1'}, 10)
          console.log("case1")
			} 
      else if(scroll_pos <= $("#diaryImg").height()*0.4 && scroll_pos > $("#diaryImg").height()*0.2) {
        $("#diaryImg").animate({'opacity':'0.8'}, 10)
        console.log("case2")
      }
      else if(scroll_pos <= $("#diaryImg").height()*0.6 && scroll_pos > $("#diaryImg").height()*0.4) {
        $("#diaryImg").animate({'opacity':'0.6'}, 10)
        console.log("case2")
      } 
      else if(scroll_pos <= $("#diaryImg").height()*0.8 && scroll_pos > $("#diaryImg").height()*0.6) {
        $("#diaryImg").animate({'opacity':'0.4'}, 10)
        console.log("case2")
      }
      else if(scroll_pos <= $("#diaryImg").height() && scroll_pos > $("#diaryImg").height()*0.8) {
        $("#diaryImg").animate({'opacity':'0.2'}, 10)
        console.log("case3")
      }
      if(scroll_pos > $("#diaryImg").height()) {
        $("#diaryImg").animate({'opacity':'0'}, 10)
        // console.log("case4")
      }

	});
//   $(document).scroll(function() { 
//     scroll_pos = 0
//     scroll_pos = $(this).scrollTop();
//     if(scroll_pos < 150) {

//       $("#diaryImg").animate({'opacity':'1'}, 500)

//     }

//   });

});