
// function animateBox() {
//   var target = document.querySelector('.box');
//   var player = target.animate([
//     {transform: 'translate(0)'},
//     {transform: 'translate(100px, 100px)'}
//   ], 500);
//   player.addEventListener('finish', function() {
//     target.style.transform = 'translate(100px, 100px)';
//   });
// }

// var box = document.querySelector('.box');
// box.addEventListener('click', function() {
//   animateBox()
// });

var elem = document.querySelector('.pulse');
var animation = elem.animate({
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  direction: 'alternate',
  duration: 500,
  iterations: Infinity,
});
    