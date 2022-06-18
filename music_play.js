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
    


    // cover.onclick = function(){
    //     cover.style.animation-play-state= "paused";
    // }

    // function stop() {
    //     cover.onclick = function () {
    //         if(cover.classList.contains('spin')){
    //             cover.classList.add('spinStop')
    //             cover.classList.remove('spin')
    //         }
    //     }

    // }

    // function setRotate() {
    //     $('#cover').click('.hand','imgRotate')
    // }

    // function setRotateStop() {
    //     $('#cover').click('.hand','imgRotateStop')
    // }
    // cover.addEventListener("click", cover.classList.add('spin'))

    // cover.onclick = function() {
    //     if(cover.classList.contains('spin')){
    //         cover.classList.remove('spin')
    //     }
    // }


    // animation-play-state: paused;