
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 0
	const cup = document.getElementById("cup");
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
			if (tmp > last_scrollTop && num <260) {
				num = num + 3
				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
        console.log(cup.src)
			}
			else if (tmp <= last_scrollTop && num <=269 && num>1) {
        // console.log()
				num = num - 1
				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
				// console.log(pencil.src)
			}
			last_scrollTop = tmp;
	});

	});