// function Imgani() {
// 	var num = 53
// 	num = num + 1
// 	const pencil = document.getElementById("pencil");
// 	pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';

// 	console.log(pencil.src)
// 	// for (i=1; i<31; i++) {
// 	// 	num = num + 1
// 	// 	const pencil = document.getElementById("pencil");
// 	// 	pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';

// 	// 	console.log(pencil.src)
//   // }
	
// }



// $(document).ready(function(){       

// 	var scroll_pos = 0;
// 	$(document).scroll(function() { 
// 			scroll_pos = $(this).scrollTop();

//         if(scroll_pos < ($( window ).width())/2) {
//           Imgani()
//         } 
//         else {
//           $("#diaryImg").fadeIn(800);
//         }

// 	});

// });

// $(document).ready(function(){       

// 	var scroll_pos = 0;
// 	var num = 1
// 	const pencil = document.getElementById("pencil");
// 	$(document).scroll(function() { 

// 			scroll_pos = $(this).scrollTop();
// 			console.log(scroll_pos)
// 			if (scroll_pos < $("#pencil").height() && num <83){
// 				num = num + 1
// 				pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
// 				console.log(pencil.src)
// 			}

// 			else if (scroll_pos >= $("#pencil").height() && num <= 83) {
// 				num = num - 1
// 				pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
// 				console.log(pencil.src)
// 			}

// 	});


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
			else if (tmp <= last_scrollTop && num <=83 && num>=1) {
				num = num - 1
				pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
				console.log(pencil.src)
			}
			last_scrollTop = tmp;
	});

	});

// });
// var last_scrollTop = 0;
// var num = 1
// const pencil = document.getElementById("pencil");
// $(window).scroll(function () {
// 		var tmp = $(this).scrollTop();
// 		if (tmp > last_scrollTop && num <83) {
// 			num = num + 1
// 			pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
// 			console.log(pencil.src)
// 		}
// 		else if (tmp <= last_scrollTop && num <=83) {
// 			num = num - 1
// 			pencil.src = 'images/pencil/pencil' + '('+ + num + ')' + '.png';
// 			console.log(pencil.src)
// 		}
// 		last_scrollTop = tmp;
// });