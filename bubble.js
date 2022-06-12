
// function bubbleHide() {
//   let bubb = document.getElementById("bubble");
//   setTimeout(function() {
//     bubb.style.opacity  = 0
//   }, 3000);
// }
let bubbTriggerMargin = 850; 
function showBubble(bubbTriggerMargin) {
  const bubbElementList = document.querySelectorAll('.bubble');
  
  const bubbFunc = function() {
    let bubb = document.getElementById("bubble");
    function bubbleHide() {
      
      setTimeout(function() {
        bubb.style.opacity  = 0
      }, 4000);
    }
    function bubbleShow() {
      bubb.style.opacity = 1
    }

    for (const element of bubbElementList) {

      if (!element.classList.contains('show')) {
        if (window.innerHeight > element.getBoundingClientRect().top + bubbTriggerMargin) {
          element.classList.remove('hide');
          bubbleHide();
          element.classList.add('show');
        }
      }
  
      if (element.classList.contains('show')) {
        // if (window.innerHeight < element.getBoundingClientRect().top + bubbTriggerMargin) {
          element.classList.remove('show');
          bubbleShow();
          element.classList.add('hide');
        // }
      }
    }
  
  }
  
  window.addEventListener('load', bubbFunc);
  window.addEventListener('scroll', bubbFunc);
}

