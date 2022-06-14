$(document).ready(function(){       

	var scroll_pos = 0;

	$(document).scroll(function() { 

			scroll_pos = $(this).scrollTop();
			console.log(scroll_pos)
			if(scroll_pos > 500) {

					$("#header").css('background-color', 'blue');

			} else {

					$("#header").css('background-color', 'red');

			}

	});

});