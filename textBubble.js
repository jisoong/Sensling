var target = document.querySelectorAll(".bubb")

function bubbleHide() {
  setTimeout(function() {
    target[0].style.opacity  = 0
    target[1].style.opacity = 0
    target[2].style.opacity = 0
  }, 6000);
}

function bubbleShow() {
  target[0].style.opacity  = 1
  target[1].style.opacity = 1
  target[2].style.opacity = 1
}

$(window).scroll(function () {
  var tmp = $(this).scrollTop();
  scroll_pos = $(this).scrollTop();
  // console.log(tmp)
  console.log(window.innerHeight*0.75) 
  if (tmp > window.innerHeight*0.5){
    bubbleHide()
    target[1].classList.remove('show')
    target[1].classList.add('hide')
    target[0].classList.remove('show')
    target[0].classList.add('hide')
    target[2].classList.remove('show')
    target[2].classList.add('hide')
    // console.log("hide")
  }
  if (target[1].classList.contains('hide')){
    if (tmp < window.innerHeight*0.6){
      bubbleShow()
      target[1].classList.remove('hide');
      target[1].classList.add('show');  
    }
  }
  if (target[0].classList.contains('hide')){
    if (tmp < window.innerHeight*0.6){
      bubbleShow()
      target[0].classList.remove('hide');
      target[0].classList.add('show');  
    }
  }
  if (target[0].classList.contains('hide')){
    if (tmp < window.innerHeight*0.6) {
      bubbleShow()
      target[2].classList.remove('hide');
      target[2].classList.add('show')
    }
  }

  
  last_scrollTop = tmp;
});

