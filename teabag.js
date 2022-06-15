
$(document).ready(function(){       
	var scroll_pos = 0;
	var last_scrollTop = 0;
	var num = 0
	const teaBag = document.getElementById("teaBag");
	$(window).scroll(function () {
			var tmp = $(this).scrollTop();
			scroll_pos = $(this).scrollTop();
      // console.log("scroll_pos"+ scroll_pos)
			if (tmp > last_scrollTop && num <190 && scroll_pos>=11750) {
				num = num + 2
				teaBag.src = 'images/teaBag/teaBag' + '_'+ + num + '.png';
        // console.log(teaBag.src)

			}
			else if (tmp <= last_scrollTop && num <=190 && num>5 && scroll_pos>=11750) {
				num = num - 2
				teaBag.src = 'images/teaBag/teaBag' + '_'+ + num + '.png';
			}
			last_scrollTop = tmp;
	});

	});