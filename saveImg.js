function imageSave(){
  console.log("");
  console.log("[canvasImageSave] : [start]");
  console.log("");

  // 캔버스 아이디 지정 실시
  // <canvas id="myBarHeightChart"></canvas> 
  var canvasID = document.getElementById("screen");


  // a 태그 생성 실시
  var a = document.createElement("a"); // a 태그 create


  // a 태그 href 속성에 캔버스 data url 지정
  a.href = canvasID.toDataURL();


  // a 태그에 download 속성 지정 실시
  var fileName = "diary.png";
  a.setAttribute("download", fileName); // a 태그에 다운로드 속성 추가


  // body 영역에 a 태그 추가 실시
  document.body.appendChild(a);


  // a 태그 강제로 클릭 이벤트 발생 및 다운 로드 수행 실시
  a.click(); // 클릭 이벤트를 발생시켜 다운로드


  // body 영역에서 a 태그 다시 삭제 실시
  document.body.removeChild(a);
};