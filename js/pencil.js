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
		var content = document.querySelectorAll(".content");
		if (pencilWheelDelta() == 'down'){
			if (pencilNum <175 && pencil_tmp>window.innerHeight*3.8){
				pencilNum = pencilNum + 2
				document.getElementById("pencil").src = 'images/pancil/pancil' + '_'+ pencilNum + '.png';
			}
		}
		if(pencilWheelDelta() == 'up'){
			if (pencilNum <=180 && pencilNum>20 && pencil_tmp<window.innerHeight*7.2){
				pencilNum = pencilNum - 2
				document.getElementById("pencil").src = 'images/pancil/pancil' + '_'+ pencilNum + '.png';
			}
		}
		pencilPrevScrollTop = pencilnowScrollTop;
		pencil_last_scrollTop = pencil_tmp;
});

