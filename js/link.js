function randomLink(){
  let randNumArray = []
  for (i=0; i<4; i++) {
    randomNum = Math.floor(Math.random() * 4)
    if (randNumArray.indexOf(randomNum) === -1) {
      randNumArray.push(randomNum)
    } else {
      i--
    }
  }
 
  let linkName = ['diary', 'tea', 'scent', 'game'];
  let randName1 = linkName[randNumArray[0]]
  let randName2 = linkName[randNumArray[1]]
  let randName3 = linkName[randNumArray[2]]
  let randName4 = linkName[randNumArray[3]]

  var link = document.getElementById("randLink1")
  link.href = randName1 + '.html'  

  var link = document.getElementById("randLink2")
  link.href = randName2 + '.html'  

  var link = document.getElementById("randLink3")
  link.href = randName3 + '.html'  

  var link = document.getElementById("randLink4")
  link.href = randName4 + '.html'  

  localStorage.setItem("link1", randName1)
  localStorage.setItem("link2", randName2)
  localStorage.setItem("link3", randName3)
  localStorage.setItem("link4", randName4)
}