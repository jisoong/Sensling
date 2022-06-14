
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 1
	const pencil = document.getElementById("pencil");
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
			if (tmp > last_scrollTop && num <83 && scroll_pos < $("#pencil").height()) {
				num = num + 1
				pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
        console.log(pencil.src)
			}
			else if (tmp <= last_scrollTop && num <=83 && num>1) {
        // console.log()
				num = num - 1
				pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
				console.log(pencil.src)
			}
			last_scrollTop = tmp;
	});

	});

