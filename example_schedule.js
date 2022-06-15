const canvas = document.getElementById('캔버스아이디')
const ctx = canvas.getContext('2d')
const width = canvas.clientWidth
const height = canvas.clientHeight
const radius = width*0.3  //반지름 값 입니다.

ctx.addEventListener('mousemove', function (event) {
    var x1 = event.clientX - eventer.parentElement.offsetLeft  //빼주는 값은 나중에 설명 합니다.
    var y1 = event.clientY - eventer.parentElement.offsetTop //빼주는 값은 나중에 설명 합니다.
    var inn = isInsideArc(x1, y1)
    console.log(inn)
})


function drawCircle(targets, first, last){
    targets.save()
    targets.beginPath()
    targets.arc(width/2, height/2, radius,(Math.PI / 180) * first, (Math.PI / 180) * last, false)
    targets.lineWidth = 3
    targets.strokeStyle='#dfdfdf'
    targets.stroke()
    targets.closePath()
    targets.restore()
}

drawCircle(ctx, 0, 360, true)