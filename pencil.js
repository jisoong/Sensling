var pencilPrevScrollTop = 0;
var pencilnowScrollTop = 0;
var pencil_scroll_pos = 0;
var pencil_last_scrollTop = 0;

function pencilWheelDelta(){
    return pencilPrevScrollTop - pencilnowScrollTop > 0 ? 'up' : 'down';
};

var pencilNum = 16
$(window).on('scroll', function(){
		var pencil_tmp = $(this).scrollTop();
		pencilnowScrollTop = $(this).scrollTop();
		if (pencilWheelDelta() == 'down'){
			if(pencilNum <179 && pencil_tmp>window.innerHeight*3.2){
				pencilNum = pencilNum + 1
				document.getElementById("pencil").src = 'images/pancil/pancil' + '_'+ pencilNum + '.png';
			}
		}
		if(pencilWheelDelta() == 'up'){
			if (pencilNum <=180 && pencilNum>20 && pencil_tmp>window.innerHeight*3.2){
				pencilNum = pencilNum - 1
				document.getElementById("pencil").src = 'images/pancil/pancil' + '_'+ pencilNum + '.png';
			}
		}
		pencilPrevScrollTop = pencilnowScrollTop;
		pencil_last_scrollTop = pencil_tmp;
});

