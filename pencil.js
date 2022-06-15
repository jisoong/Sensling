
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 16
	const pencil = document.getElementById("pencil");
	
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
			// console.log(scroll_pos)
			// console.log("scroll_pos"+ scroll_pos)
			if (tmp > last_scrollTop && num <179 && scroll_pos>=6000) {

				num = num + 1
				pencil.src = 'images/pancil/pancil' + '_'+ + num + '.png';
				
			}
			else if (tmp <= last_scrollTop && num <=179 && num>20 && scroll_pos>=5530) {
        // console.log()
				num = num - 1
				pencil.src = 'images/pancil/pancil' + '_'+ + num + '.png';
			

			}
			last_scrollTop = tmp;
	});

	});

