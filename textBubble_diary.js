var targetB = document.querySelectorAll(".bubb")

function bubbleHide_D(i) {
  setTimeout(function() {
    targetB[i].style.opacity  = 0
  }, 6000);
}

function bubbleShow_D(i) {
  targetB[i].style.opacity  = 1
}

$(window).scroll(function () {
  var tmp = $(this).scrollTop();
  scroll_pos = $(this).scrollTop();
  console.log(tmp)
  // console.log(window.innerHeight*0.75) 
  if (tmp > window.innerHeight*1.1){

    bubbleHide_D(0)
    targetB[0].classList.remove('show')
    targetB[0].classList.add('hide')
    bubbleHide_D(1)
    targetB[1].classList.remove('show')
    targetB[1].classList.add('hide')
    // console.log("hide")
  }
  if (tmp > window.innerHeight*2.6) {
    bubbleHide_D(3)
    targetB[3].classList.remove('show')
    targetB[3].classList.add('hide')
    bubbleHide_D(2)
    targetB[2].classList.remove('show')
    targetB[2].classList.add('hide')
  }

  if (targetB[2].classList.contains('hide')){
    if (tmp < window.innerHeight*2.4){
      bubbleShow_D(2)
      targetB[2].classList.remove('hide');
      targetB[2].classList.add('show');  
    }
  }
  if (targetB[1].classList.contains('hide')){
    if (tmp < window.innerHeight*1.9){
      bubbleShow_D(1)
      targetB[1].classList.remove('hide');
      targetB[1].classList.add('show');  
    }
  }
  if (targetB[0].classList.contains('hide')){
    if (tmp < window.innerHeight*1.9){
      bubbleShow_D(0)
      targetB[0].classList.remove('hide');
      targetB[0].classList.add('show');  
    }
  }
  if (targetB[3].classList.contains('hide')){
    if (tmp < window.innerHeight*2.4) {
      bubbleShow_D(2)
      targetB[3].classList.remove('hide');
      targetB[3].classList.add('show')
    }
  }

  
  last_scrollTop = tmp;
});
