function showImage(){
  let imgName = ['sky', 'forest', 'ocean', 'flower'];
  let randName = imgName[Math.floor(Math.random() * 3)]

  let randNumArray = []
  for (i=0; i<4; i++) {
    randomNum = Math.floor(Math.random() * 15)
    if (randNumArray.indexOf(randomNum) === -1) {
      randNumArray.push(randomNum)
    } else {
      i--
    }
  }

  let randImg = randName + randNumArray[0]
  let randImg2 = randName + randNumArray[1]
  let randImg3 = randName + randNumArray[2]
  let randImg4 = randName + randNumArray[3]

  var objImg = document.getElementById("randImg1");
  objImg.src = 'images/'+ randName + '/' + randImg + '.jpg';

  var objImg = document.getElementById("randImg2");
  objImg.src = 'images/'+ randName + '/' + randImg2 + '.jpg';

  var objImg = document.getElementById("randImg3");
  objImg.src = 'images/'+ randName + '/' + randImg3 + '.jpg';

  var objImg = document.getElementById("randImg4");
  objImg.src = 'images/'+ randName + '/' + randImg4 + '.jpg';
}