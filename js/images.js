function showImage(){
  const imgName = ['sky', 'forest', 'ocean', 'flower'];
  const randName = imgName[Math.floor(Math.random() * 4)]

  const randNumArray = []
  for (i=0; i<4; i++) {
    randomNum = Math.floor(Math.random() * 16)
    if (randNumArray.indexOf(randomNum) === -1) {
      randNumArray.push(randomNum)
    } else {
      i--
    }
  }

  const randImg1 = randName + randNumArray[0]
  const randImg2 = randName + randNumArray[1]
  const randImg3 = randName + randNumArray[2]
  const randImg4 = randName + randNumArray[3]
  
  const objImg1 = document.getElementById("randImg1");
  objImg1.src = 'images/'+ randName + '/' + randImg1 + '.jpg';
  
  var objImg2 = document.getElementById("randImg2");
  objImg2.src = 'images/'+ randName + '/' + randImg2 + '.jpg';

  var objImg3 = document.getElementById("randImg3");
  objImg3.src = 'images/'+ randName + '/' + randImg3 + '.jpg';

  var objImg4 = document.getElementById("randImg4");
  objImg4.src = 'images/'+ randName + '/' + randImg4 + '.jpg';
  
  var bgm = document.getElementById("bgm");
  bgm.src = 'sounds/'+ randName + '.mp3';
  bgm.play()

  localStorage.setItem("randName", randName)
  localStorage.setItem("Img1", randImg1)
  localStorage.setItem("Img2", randImg2)
  localStorage.setItem("Img3", randImg3)
  localStorage.setItem("Img4", randImg4)
}