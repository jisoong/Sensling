
var smokePrevScrollTop = 0;
var smokeNowScrollTop = 0;
var smoke_scroll_pos = 0;
var smoke_last_scrollTop = 0;

function smokeWheelDelta(){
    return smokePrevScrollTop - smokeNowScrollTop > 0 ? 'up' : 'down';
};

var smokeNum = 0
$(window).on('scroll', function(){
		var smoke_tmp = $(this).scrollTop();

		smokeNowScrollTop = $(this).scrollTop();
		if (smokeWheelDelta() == 'down'){
			if(smokeNum <27 && smoke_tmp<window.innerHeight*2.8 && smoke_tmp > window.innerHeight*1.4){
				smokeNum = smokeNum + 1
				document.getElementById("smoke").src = 'images/smoke/smoke' + '_'+ smokeNum + '.png';
        document.getElementById("smoke").style.left += 1
			}
		}
		if(smokeWheelDelta() == 'up'){
			if ( smokeNum <=27 && smokeNum>0 && smoke_tmp<window.innerHeight*2.8){
				smokeNum = smokeNum - 1
				document.getElementById("smoke").src = 'images/smoke/smoke' + '_'+ smokeNum + '.png';
			}
		}
		smokePrevScrollTop = smokeNowScrollTop;
		smoke_last_scrollTop = smoke_tmp;
});