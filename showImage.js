let saTriggerMargin = 450; 
function showImg(saTriggerMargin) {
  const saElementList = document.querySelectorAll('.sa');
  
  const saFunc = function() {
    for (const element of saElementList) {

      if (!element.classList.contains('show')) {
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.remove('hide');
          element.classList.add('show');
        }
      }
  
      if (element.classList.contains('show')) {
        if (window.innerHeight < element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.remove('show');
          element.classList.add('hide');
        }
      }
    }
  
  }
  
  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);
}
