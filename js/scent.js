function scent() {
    
    Lavender = [
      "lavender",
      "라벤더 Lavender",
      "라벤더는 상쾌하고 달콤한 향으로 마음을 진정시키고,",
      "숙면을 취할 수 있도록 도와줍니다.",
      "또한 스트레스 해소나 근육 긴장 해소, 통증 완화에도 좋습니다.",
    ]
    Rose = [
      "rose",
      "로즈 Rose",
      "로즈는 우아한 향기를 가지고 있으며, 기분을 고양시키고 행복감을 줍니다.",
      "스트레스를 해소시키고 식욕을 억제하기도 합니다.",
    ]
    Jasmine = [
      "jasmine",
      "재스민 Jasmine",
      "재스민은 달콤하고 관능적인 향을 가지고 있습니다.",
      "기분 전환을 하고 싶을 때, 피로를 회복하고 싶을 때 좋습니다.",
    ]
    teaTree = [
      "teatree",
      "티트리 teaTree",
      "티트리는 독특하고 강한 향으로 살균효과가 있고,",
      "매운향 때문에 기분이 상쾌해 집니다.",
      "향균 작용 때문에 호흡기 질병, 꽃가루 알레르기, 감기에 효과가 있습니다.",
    ]
    Mint = [
      "mint",
      "박하 Mint",
      "박하는 시원한 느낌을 주는 향기로 스트레스와 ",
      "피로를 완화시키고, 졸음을 억제시켜 줍니다.",
      "코막힘이나 인후통 등의 호흡기 컨디션도 좋게 도와줍니다.",
    ]
    Eucalyptus = [
      "eucalyptus",
      "유칼립투스 Eucalyptus",
      "유칼립투스는 시원하게 톡 쏘는 향기를 가지고 있으며, 강한 향균력이 있기 때문에 ",
      "감기예방에도 좋고, 꽃가루에 의한 코막힘에도 효과가 있습니다.",
      "또한 집중력 향상에도 좋으며 마음의 혼란을 진정시키고 피로 회복에도 좋습니다.",
    ]
    Rosemary = [
      "rosemary",
      "로즈마리 Rosemary",
      "로즈마리는 청량하고 신선한 향기를 가지고 있으며, 집중력과 기억력 향상에 좋습니다.",
      "일이나 공부할 때 혹은 이른 아침이나, 운전 중에 효과가 좋습니다.",
    ]
    Lemon = [
      "lemon",
      "레몬 Lemon",
      "레몬은 신선한 향기를 가지고 있으며 기분을 좋게 하고",
      "이해력과 집중력, 기억력을 높여준다.",
    ]
  
    randName = [Lavender, Rose, Jasmine, teaTree, Mint, Eucalyptus, Rosemary, Lemon]
    randomNum = randName[Math.floor(Math.random() * 8)]
    for (i=0; (i<randomNum.length); i++){
      var id_name = document.getElementById("scent" + i)
      
      if (randomNum[i] == undefined){
        id_name.innerText = " "
      }
      else{
        id_name.innerText = randomNum[i]
      }
      
    }
    
  }