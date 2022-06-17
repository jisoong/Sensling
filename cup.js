
// $(document).ready(function(){       
// 	var scroll_pos = 0;
// 	var last_scrollTop = 0;
// 	var num = 0
// 	const cup = document.getElementById("cup");
// 	$(window).scroll(function () {
// 		console.log(tmp)
// 			var tmp = $(this).scrollTop();
// 			scroll_pos = $(this).scrollTop();
// 			if (tmp > last_scrollTop && num <260) {
// 				num = num + 3
// 				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
//         // console.log(cup.src)

// 			}
// 			else if (tmp <= last_scrollTop && num <=269 && num>5) {
// 				num = num - 3
// 				cup.src = 'images/cup/cup' + '_'+ + num + '.png';
// 			}
// 			last_scrollTop = tmp;
// 	});

// 	});
// var scroll_pos = 0;
// var last_scrollTop = 0;
// var num = 0;
// console.log()
// // 	const cup = document.getElementById("cup");
// $(window).scroll(function () {

// 	var tmp = $(this).scrollTop();
// 	// console.log(tmp) 2400
// 	scroll_pos = $(this).scrollTop();
// 	if (tmp > last_scrollTop && num <260){
// 		num = num + 3
// 		cup.src = 'images/cup/cup' + '_'+ num + '.png';
// 	}
// 	if (tmp <= last_scrollTop && num <=269 && num>5) {
// 		num = num - 3
// 		cup.src = 'images/cup/cup' + '_'+ num + '.png';
// 	}		
// 	last_scrollTop = tmp;
// });


// var teaBagprevScrollTop = 0;
// var teaBagnowScrollTop = 0;
// var teaBag_scroll_pos = 0;
// var teaBag_last_scrollTop = 0;

// function teaBagWheelDelta(){
//     return teaBagprevScrollTop - teaBagnowScrollTop > 0 ? 'up' : 'down';
// };

var cupPrevScrollTop = 0;
var cupNowScrollTop = 0;
var cup_last_scrollTop = 0;

function cupWheelDelta(){
    return cupPrevScrollTop - cupNowScrollTop > 0 ? 'up' : 'down';
};

var cupNum = 1
$(window).on('scroll', function(){
		var cup_tmp = $(this).scrollTop();
		cupNowScrollTop = $(this).scrollTop();
		// console.log(cupNum)
		if (cupWheelDelta() == 'down'){
			if(cupNum <260 && cup_tmp<window.innerHeight*3){
				cupNum = cupNum + 4
				document.getElementById("cup").src = 'images/cup/cup' + '_'+ cupNum + '.png';
			}
		}
		if(cupWheelDelta() == 'up'){
			if (cupNum <=260 && cupNum>5 && cup_tmp<window.innerHeight*3){
				cupNum = cupNum - 4
				document.getElementById("cup").src = 'images/cup/cup' + '_'+ cupNum + '.png';
				
			}
		}
		cupPrevScrollTop = cupNowScrollTop;
		cup_last_scrollTop = cup_tmp;
});
	