function music() {
    music1 = [
        "Today's Music #1",
        "가까운 듯 먼 그대여",
        "by",
        "카더가든",
    ]
    music2 = [
        "Today's Music #2",
        "기다린 만큼, 더",
        "by",
        "검정치마",
    ]
    music3 = [
        "Today's Music #3",
        "처음이니까",
        "by",
        "오왠",
    ]
    music4 = [
        "Today's Music #4",
        "그 밤 그 밤",
        "by",
        "잔나비",
    ]
    music5 = [
        "Today's Music #5",
        "Yours",
        "by",
        "데이먼스이어",
    ]
    music6 = [
        "Today's Music #6",
        "Paul",
        "by",
        "혁오",
    ]
    music7 = [
        "Today's Music #7",
        "깜빡 (feat.카더가든)",
        "by",
        "유라",
    ]
    music8 = [
        "Today's Music #8",
        "백야",
        "by",
        "짙은",
    ]
    music9 = [
        "Today's Music #9",
        "우리의 밤을 외워요",
        "by",
        "카더가든",
    ]
    music10 = [
        "Today's Music #10",
        "처음 만날 때처럼",
        "by",
        "잔나비",
    ]
    music11 = [
        "Today's Music #11",
        "뜨거운 여름밤은 가고 남은 건 볼품없지만",
        "by",
        "잔나비",
    ]
    music12 = [
        "Today's Music #12",
        "Home Sweet Home",
        "by",
        "카더가든",
    ]
    music13 = [
        "Today's Music #13",
        "Everything",
        "by",
        "검정치마",
    ]
    music14 = [
        "Today's Music #14",
        "하와이 검은 모래",
        "by",
        "검정치마",
    ]
    music15 = [
        "Today's Music #15",
        "josee!",
        "by",
        "데이먼스이어",
    ]
    
    textMusic = [music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, music14, music15]
    const coverImg = document.getElementById("cover");
    const coverMusic = document.getElementById("musicPlay");

    randomNum = Math.floor(Math.random() * 15) + 1;
    randName = 'music' + randomNum;
    randMusic = textMusic[randomNum-1];
    coverImg.src = 'images/music/' + randName + '.png';
    coverMusic.src = 'sounds/music/' + randName + '.mp3';
    // coverMusic.src = 'sounds/music/' + localStorage.getItem("randName") + '.mp3';
    console.log(randMusic)
    $("#scene").text(randMusic[0]);
    $("#musicTitle").text(randMusic[1]);
    $("#by").text(randMusic[2]);
    $("#singer").text(randMusic[3]);

    var count = 0

    var cover = document.querySelector(".hand")
    var stringEffect = document.getElementById("stringEffect")
    var musicPlay = document.getElementById("musicPlay")

    console.log(musicPlay);

    cover.onclick = function(){
        document.getElementById('music0').play()

        if (count == 0){
            cover.classList.add('spinStop')
            cover.classList.remove('spin')
            
            setTimeout(function() {
                musicPlay.play();
              }, 2000);
        }

        else if (count %2 == 0){
            cover.classList.add('spinStop')
            cover.classList.remove('spin')
            setTimeout(function() {
                musicPlay.play();
              }, 2000);
        }
        else {
            cover.classList.add('spin')
            cover.classList.remove('spinStop')
            musicPlay.pause();
        }
        count +=1
       
    }
}
