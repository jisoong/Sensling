var target = document.querySelectorAll(".bubb")

$(window).scroll(function () {
  var tmp = $(this).scrollTop();
  scroll_pos = $(this).scrollTop();
  // console.log(tmp)
  console.log(window.innerHeight)
  if (tmp > window.innerHeight){
    target[1].classList.remove('show')
    target[1].classList.add('hide')
    // console.log("hide")
  }
  if (target[1].classList.contains('hide'))
    if (tmp < window.innerHeight*0.5){
      target[1].classList.remove('hide');
      target[1].classList.add('show');  
    }
  last_scrollTop = tmp;
});