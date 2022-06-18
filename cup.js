var cupPrevScrollTop = 0;
var cupNowScrollTop = 0;
var cup_last_scrollTop = 0;

function cupWheelDelta(){
    return cupPrevScrollTop - cupNowScrollTop > 0 ? 'up' : 'down';
};

var cupNum = 1
console.log(window.innerHeight)
$(window).on('scroll', function(){

		var cup_tmp = $(this).scrollTop();
		console.log(cup_tmp)
		cupNowScrollTop = $(this).scrollTop();
		if (cupWheelDelta() == 'down'){
			if(cupNum <260 && cup_tmp<window.innerHeight*2.6){
				cupNum = cupNum + 4
				document.getElementById("cup").src = 'images/cup/cup' + '_'+ cupNum + '.png';
				console.log("hi")
			}
		}
		if(cupWheelDelta() == 'up'){
			if (cupNum <=270 && cupNum>5 && cup_tmp<window.innerHeight*3){
				// if (cupNum <=270 && cupNum>5 && cup_tmp<window.innerHeight*2.7){
					cupNum = cupNum - 4
					document.getElementById("cup").src = 'images/cup/cup' + '_'+ cupNum + '.png';
					console.log("bye")
				// }
		}
	}
		cupPrevScrollTop = cupNowScrollTop;
		cup_last_scrollTop = cup_tmp;
});
	