
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 0
	const cup = document.getElementById("cup");
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
			if (tmp > last_scrollTop && num <260  && scroll_pos > $("#cup").height()*0.1) {
				num = num + 3
				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
        // console.log(cup.src)

			}
			else if (tmp <= last_scrollTop && num <=269 && num>5) {
				num = num - 3
				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
			}
			last_scrollTop = tmp;
	});

	});