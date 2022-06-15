
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 16
	const pencil = document.getElementById("pencil");
	
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
			console.log("scroll_pos"+ scroll_pos)
			if (tmp > last_scrollTop && num <83 && scroll_pos>=5700) {

				num = num + 1
				pencil.src = 'images/pancil/pancil' + '_'+ + num + '.png';
				
			}
			else if (tmp <= last_scrollTop && num <=83 && num>20 && scroll_pos>=5700) {
        // console.log()
				num = num - 1
				pencil.src = 'images/pancil/pancil' + '_'+ + num + '.png';
			

			}
			last_scrollTop = tmp;
	});

	});

