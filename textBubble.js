var target = document.querySelector(".bubb")
var tmp = $(this).scrollTop();

$(window).scroll(function () {
  var tmp = $(this).scrollTop();
  scroll_pos = $(this).scrollTop();
  // console.log(tmp)
  // console.log(window.innerHeight)
  if (tmp > window.innerHeight){
    target.classList.remove('show')
    target.classList.add('hide')
    // console.log("hide")
  }
  if (target.classList.contains('hide'))
    if (tmp < window.innerHeight*0.5){
      target.classList.remove('hide');
      target.classList.add('show');  
    }
  last_scrollTop = tmp;
});

