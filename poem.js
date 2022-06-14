function poem() {
  poem1 = [
    "하루살이",
    "최태안",
    "인생이 길지 않다며",
    "시간을 쪼개어 아껴 쓰고",
    "오늘 같은 내일이",
    "다시 온다는 보장이 없어",
    "매 순간 값진 일을 찾아",
    "전력으로 질주하며",
    "해 질 녘에는 회개로",
    "하루를 마무리하는",
    "겸허하고 겸허한",
    "하루살이"
  ]
  for (i=2; (i<poem1.length-2); i++){
    var id_name = document.getElementById(i)
    id_name.innerText = poem1[i]
  }
  $("#poemTitle").text(poem1[0]);
  $("#writer").text(poem1[1]);
}

// $(window).scroll(function(){
//   $("#poemTitle").text(poem1[0]);
// });

// $(window).scroll(function(){
//   $("#writer").text(poem1[1]);
// });

// $(window).scroll(function(){
//   for (i=2; (i<poem1.length-2); i++){
//     id_name = "content" + i
//     console.log(id_name)
//     content_name = poem1[i]
//     $("#id_name").text(content_name);
//   }
  
// });

