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
  console.log(tmp)
  // console.log(window.innerHeight*0.75) 
  if (tmp > window.innerHeight*0.5){
    bubbleHide(1)
    target[1].classList.remove('show')
    target[1].classList.add('hide')
    bubbleHide(0)
    target[0].classList.remove('show')
    target[0].classList.add('hide')
    // console.log("hide")
  }
  if(tmp > window.innerHeight*1.3){
    bubbleHide(2)
    target[2].classList.remove('show')
    target[2].classList.add('hide')
  }
  if (target[1].classList.contains('hide')){
    if (tmp < window.innerHeight*1.4){
      bubbleShow(1)
      target[1].classList.remove('hide');
      target[1].classList.add('show');  
    }
  }
  if (target[0].classList.contains('hide')){
    if (tmp < window.innerHeight*1.4){
      bubbleShow(0)
      target[0].classList.remove('hide');
      target[0].classList.add('show');  
    }
  }
  if (target[0].classList.contains('hide')){
    if (tmp < window.innerHeight*2) {
      bubbleShow(2)
      target[2].classList.remove('hide');
      target[2].classList.add('show')
    }
  }

  
  last_scrollTop = tmp;
});

