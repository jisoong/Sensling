window.addEventListener("keypress", checkKeyPressed, false);
// const animation = document.querySelectorAll(".bWrap");



// console.log(target[1].classList)

function checkKeyPressed(e) {
  console.log(e.keyCode)
  var target = document.querySelectorAll(".bWrap");
	if (e.keyCode === 49) {
    
		document.getElementById("1").src = "images/game/after (1).png"
    // target.classList.add('ani');
    target[1].classList.add('pong')

     
  }
  else if (e.keyCode === 50) {
    document.getElementById("2").src = "images/game/after (2).png"
    target[2].classList.add('pong')
     
  }
  else if (e.keyCode === 51) {
    document.getElementById("3").src = "images/game/after (4).png"
    target[3].classList.add('pong')
  }
  else if (e.keyCode === 52) {
    document.getElementById("4").src = "images/game/after (3).png"
    target[4].classList.add('pong')
  }
  else if (e.keyCode === 53) {
    document.getElementById("5").src = "images/game/after (5).png"
    target[5].classList.add('pong')
  }
  else if (e.keyCode === 54) {
    document.getElementById("6").src = "images/game/after (2).png"
    target[6].classList.add('pong')
  }
  else if (e.keyCode === 55) {
    document.getElementById("7").src = "images/game/after (1).png"
    target[7].classList.add('pong')
  }
  else if (e.keyCode === 56) {
    document.getElementById("8").src = "images/game/after (5).png"
    target[8].classList.add('pong')
  }
  else if (e.which === 57) {
    document.getElementById("9").src = "images/game/after (4).png"
    target[9].classList.add('pong')
  }
  else if (e.keyCode === 48) {
    document.getElementById("10").src = "images/game/after (3).png"
    target[10].classList.add('pong')
  }
  else if (e.keyCode === 45) {
    document.getElementById("45").src = "images/game/after (3).png"
    target[11].classList.add('pong')
  }
  else if (e.keyCode === 81 || e.keyCode === 113) {
    document.getElementById("Q").src = "images/game/after (2).png"
    target[13].classList.add('pong')
  }
  else if (e.keyCode === 87 || e.keyCode === 119) {
    document.getElementById("W").src = "images/game/after (3).png"
    target[14].classList.add('pong')
  }
  else if (e.keyCode === 69 || e.keyCode === 101) {
    document.getElementById("E").src = "images/game/after (5).png"
    target[15].classList.add('pong')
  }
  else if (e.keyCode === 82 || e.keyCode === 114) {
    document.getElementById("R").src = "images/game/after (4).png"
    target[16].classList.add('pong')
  }
  else if (e.keyCode === 84 || e.keyCode === 116) {
    document.getElementById("T").src = "images/game/after (1).png"
    target[17].classList.add('pong')
  }
  else if (e.keyCode === 89 || e.keyCode === 121) {
    document.getElementById("Y").src = "images/game/after (2).png"
    target[18].classList.add('pong')
  }
  else if (e.keyCode === 85 || e.keyCode === 117) {
    document.getElementById("U").src = "images/game/after (3).png"
    target[19].classList.add('pong')
  }
  else if (e.keyCode === 73 || e.keyCode === 105) {
    document.getElementById("I").src = "images/game/after (5).png"
    target[20].classList.add('pong')
  }
  else if (e.keyCode === 79 || e.keyCode === 111) {
    document.getElementById("O").src = "images/game/after (2).png"
    target[21].classList.add('pong')
  }
  else if (e.keyCode === 80 || e.keyCode === 112) {
    document.getElementById("P").src = "images/game/after (4).png"
    target[22].classList.add('pong')
  }
  else if (e.keyCode === 91) {
    document.getElementById("91").src = "images/game/after (1).png"
    target[23].classList.add('pong')
  }
  else if (e.keyCode === 65 || e.keyCode === 97) {
    document.getElementById("A").src = "images/game/after (3).png"
    target[25].classList.add('pong')
  }
  else if (e.keyCode === 83 || e.keyCode === 115) {
    document.getElementById("S").src = "images/game/after (5).png"
    target[26].classList.add('pong')
  }
  else if (e.keyCode === 68 || e.keyCode === 100) {
    document.getElementById("D").src = "images/game/after (2).png"
    target[27].classList.add('pong')
  }
  else if (e.keyCode === 70 || e.keyCode === 102) {
    document.getElementById("F").src = "images/game/after (4).png"
    target[28].classList.add('pong')
  }
  else if (e.keyCode === 71 || e.keyCode === 103) {
    document.getElementById("G").src = "images/game/after (1).png"
    target[29].classList.add('pong')
  }
  else if (e.keyCode === 72 || e.keyCode === 104) {
    document.getElementById("H").src = "images/game/after (3).png"
    target[30].classList.add('pong')
  }
  else if (e.keyCode === 74 || e.keyCode === 106) {
    document.getElementById("J").src = "images/game/after (5).png"
    target[31].classList.add('pong')
  }
  else if (e.keyCode === 75 || e.keyCode === 107) {
    document.getElementById("K").src = "images/game/after (2).png"
    target[32].classList.add('pong')
  }
  else if (e.keyCode === 76 || e.keyCode === 108) {
    document.getElementById("L").src = "images/game/after (4).png"
    target[33].classList.add('pong')
  }
  else if (e.keyCode === 59) {
    document.getElementById("59").src = "images/game/after (1).png"
    target[34].classList.add('pong')
  }
  else if (e.keyCode === 90 || e.keyCode === 122) {
    document.getElementById("Z").src = "images/game/after (5).png"
    target[37].classList.add('pong')
  }
  else if (e.keyCode === 88 || e.keyCode === 120) {
    document.getElementById("X").src = "images/game/after (2).png"
    target[38].classList.add('pong')
  }
  else if (e.keyCode === 67 || e.keyCode === 99) {
    document.getElementById("C").src = "images/game/after (4).png"
    target[39].classList.add('pong')
  }
  else if (e.keyCode === 86 || e.keyCode === 118) {
    document.getElementById("V").src = "images/game/after (1).png"
    target[40].classList.add('pong')
  }
  else if (e.keyCode === 66 || e.keyCode === 98) {
    document.getElementById("B").src = "images/game/after (3).png"
    target[41].classList.add('pong')
  }
  else if (e.keyCode === 78 || e.keyCode === 110) {
    document.getElementById("N").src = "images/game/after (5).png"
    target[42].classList.add('pong')
  }
  else if (e.keyCode === 77 || e.keyCode === 109) {
    document.getElementById("M").src = "images/game/after (2).png"
    target[43].classList.add('pong')
  }
  else if (e.keyCode === 44) {
    document.getElementById("44").src = "images/game/after (4).png"
    target[44].classList.add('pong')
  }
  else if (e.keyCode === 46) {
    document.getElementById("46").src = "images/game/after (1).png"
    target[45].classList.add('pong')
  }
  else if (e.keyCode === 47) {
    document.getElementById("47").src = "images/game/after (1).png"
    target[46].classList.add('pong')
  }
  document.getElementById('airCap').play()
}
