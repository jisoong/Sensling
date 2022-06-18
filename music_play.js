function musicPlay(){
    var count = 0

    var cover = document.querySelector(".hand")
    var stringEffect = document.getElementById("stringEffect")
    var music = document.getElementById("music")

    stringEffect.onclick = function(){
        document.getElementById('music0').play()

        if (count == 0){
            cover.classList.add('spinStop')
            cover.classList.remove('spin')
            music.play();
        }

        else if (count %2 == 0){
            cover.classList.add('spinStop')
            cover.classList.remove('spin')
            music.pause();
        }
        else {
            cover.classList.add('spin')
            cover.classList.remove('spinStop')
            music.play();
        }
        count +=1
       
    }
}
