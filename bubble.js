function showBubble() {
  const bubbElementList = document.querySelectorAll('.bubble');
  let bubbTriggerMargin = 850
  const bubbFunc = function() {
    let bubb = document.getElementById("bubble");
    function bubbleHide() {
      setTimeout(function() {
        bubb.style.opacity  = 0
      }, 3000);
    };
    function bubbleShow() {
      bubb.style.opacity = 1
    };

    if (bubb.style.opacity == 1){
      let start = 0
    }
    


    for (const element of bubbElementList) {
      if (start = 0) {
        element.classList.add('show'); 
        start += 1
      }
      
      if (!element.classList.contains('show')) {
         if (window.innerHeight > element.getBoundingClientRect().top + bubbTriggerMargin) {
            bubbleHide();
            element.classList.remove('hide');
            element.classList.add('show');  
         }
      }
  
      if (element.classList.contains('show')) {
        if (window.innerHeight < element.getBoundingClientRect().top + bubbTriggerMargin) {
          bubbleShow();
          element.classList.remove('show');
          element.classList.add('hide');  
       }
      }
    
   }
  window.addEventListener('load', bubbFunc);
  window.addEventListener('scroll', bubbFunc);
  }
}

