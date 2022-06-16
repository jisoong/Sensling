window.addEventListener("keypress", checkKeyPressed, false);
// const animation = document.querySelectorAll(".bWrap");

var target = document.querySelectorAll(".bWrap");



function checkKeyPressed(e) {
	if (e.keyCode === 49) {
		document.getElementById("1").src = "images/game/after (1).png"
    // target.classList.add('ani');
    target[1].classList.add('pong')

     
  }
  else if (e.keyCode === 50) {
    document.getElementById("2").src = "images/game/after (2).png"
    document.getElementById('airCap').play()
     
  }
  else if (e.keyCode === 51) {
    document.getElementById("3").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 52) {
    document.getElementById("4").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 53) {
    document.getElementById("5").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 54) {
    document.getElementById("6").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 55) {
    document.getElementById("7").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 56) {
    document.getElementById("8").src = "images/game/after (5).png"
     
  }
  else if (e.which === 57) {
    document.getElementById("9").src = "images/game/after (4).png"
     
  }
  else if (e.keycode === 48) {
    document.getElementById("10").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 45) {
    document.getElementById("45").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 113) {
    document.getElementById("Q").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 119) {
    document.getElementById("W").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 101) {
    document.getElementById("E").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 114) {
    document.getElementById("R").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 116) {
    document.getElementById("T").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 121) {
    document.getElementById("Y").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 117) {
    document.getElementById("U").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 105) {
    document.getElementById("I").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 111) {
    document.getElementById("O").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 112) {
    document.getElementById("P").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 91) {
    document.getElementById("91").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 97) {
    document.getElementById("A").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 115) {
    document.getElementById("S").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 100) {
    document.getElementById("D").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 102) {
    document.getElementById("F").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 103) {
    document.getElementById("G").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 104) {
    document.getElementById("H").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 106) {
    document.getElementById("J").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 107) {
    document.getElementById("K").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 108) {
    document.getElementById("L").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 59) {
    document.getElementById("59").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 122) {
    document.getElementById("Z").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 120) {
    document.getElementById("X").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 99) {
    document.getElementById("C").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 118) {
    document.getElementById("V").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 98) {
    document.getElementById("B").src = "images/game/after (3).png"
     
  }
  else if (e.keyCode === 110) {
    document.getElementById("N").src = "images/game/after (5).png"
     
  }
  else if (e.keyCode === 109) {
    document.getElementById("M").src = "images/game/after (2).png"
     
  }
  else if (e.keyCode === 44) {
    document.getElementById("44").src = "images/game/after (4).png"
     
  }
  else if (e.keyCode === 46) {
    document.getElementById("46").src = "images/game/after (1).png"
     
  }
  else if (e.keyCode === 47) {
    document.getElementById("47").src = "images/game/after (1).png"
     
  }
  document.getElementById('airCap').play()
}

