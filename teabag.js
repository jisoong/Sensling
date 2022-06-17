
var teaBagprevScrollTop = 0;
var teaBagnowScrollTop = 0;
var teaBag_scroll_pos = 0;
var teaBag_last_scrollTop = 0;

function teaBagWheelDelta(){
    return teaBagprevScrollTop - teaBagnowScrollTop > 0 ? 'up' : 'down';
};

var teaBagNum = 1
$(window).on('scroll', function(){
		var teaBag_tmp = $(this).scrollTop();
		// console.log(teaBag_tmp) 6500
		// console.log(innerHeight*6.8)
		teaBagnowScrollTop = $(this).scrollTop();
		if (teaBagWheelDelta() == 'down'){
			if(teaBagNum <199 && teaBag_tmp>window.innerHeight*6.8){
				teaBagNum = teaBagNum + 2
				document.getElementById("teaBag").src = 'images/teaBag/teaBag' + '_'+ teaBagNum + '.png';
				// console.log("hi")
			}
		}
		if(teaBagWheelDelta() == 'up'){
			if ( teaBagNum <=199 && teaBagNum>2 && teaBag_tmp>=window.innerHeight*6.8){
				teaBagNum = teaBagNum - 2
				document.getElementById("teaBag").src = 'images/teaBag/teaBag' + '_'+ teaBagNum + '.png';
				// console.log("bye")
			}
		}
		teaBagprevScrollTop = teaBagnowScrollTop;
		teaBag_last_scrollTop = teaBag_tmp;
});