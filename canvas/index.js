$(function() {
    var canvas = document.querySelector('c'),
        ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 100, 100);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 200, 200);

    ctx.strokeStyle = "rgba(255,255,0,1)"
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.stroke();
    ctx.lineTo(500,500);
    ctx.fill();

    var boy = new Image();
    boy.addEventListener('load', function() {
        ctx.drawImage(boy, 300, 0);

        ctx.drawImage(boy, 300, 200, 50, 100);
    });
    boy.src = 'res/Character Boy.png';
});
