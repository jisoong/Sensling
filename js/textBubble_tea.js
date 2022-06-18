var target = document.querySelectorAll(".bubb")

function bubbleHide(i) {
  setTimeout(function() {
    target[i].style.opacity  = 0
  }, 6000);
}

function bubbleShow(i) {
  target[i].style.opacity  = 1
}
$(window).scroll(function () {
  var tmp = $(this).scrollTop();
  scroll_pos = $(this).scrollTop();
  if (target[0].classList.contains('hide')){
      if (tmp < window.innerHeight*4) {
      bubbleShow(0)
      target[0].classList.remove('hide');
      target[0].classList.add('show'); 
    }
  }
  if (target[1].classList.contains('hide')){
    if (tmp < window.innerHeight*9.3){
      bubbleShow(1)
      target[1].classList.remove('hide');
      target[1].classList.add('show');
      bubbleShow(2) 
      target[2].classList.remove('hide');
      target[2].classList.add('show'); 
    }
  }
  if (target[3].classList.contains('hide')){
    if (tmp < window.innerHeight*10.5){
      bubbleShow(3)
      target[3].classList.remove('hide');
      target[3].classList.add('show')
    }
  }
  if (tmp > window.innerHeight*10.5){
    bubbleHide(3)
    target[3].classList.remove('show')
    target[3].classList.add('hide')

  }
  if (tmp > window.innerHeight*9.3){
    bubbleHide(1)
    target[1].classList.remove('show')
    target[1].classList.add('hide')
    bubbleHide(2)
    target[2].classList.remove('show')
    target[2].classList.add('hide')

  }
  if (tmp > window.innerHeight*4){
    bubbleHide(0)
    target[0].classList.remove('show')
    target[0].classList.add('hide')

  }
  last_scrollTop = tmp;
});