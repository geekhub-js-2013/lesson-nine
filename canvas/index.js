$(function() {
    var canvas = document.querySelector('#c'),
        ctx = canvas.getContext('2d');

    function drawBackground() {
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10, 10, 100, 100);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 200, 200);

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.stroke();
        ctx.lineTo(500, 500);
        ctx.fill();
    }

    //var boy = document.querySelector('img');
    var boy = new Image();
    boy.addEventListener('load', function() {
        ctx.drawImage(boy, 300, 0);

        ctx.drawImage(boy, 300, 200, 100, 100);
    });
    boy.src = 'res/Character Boy.png';

    var i = 0,
        direction = 'forward',
        lastTime;

    function drawFrame(time) {
        var moved;
        if (!lastTime) {
            moved = 1;
        } else {
            moved = time - lastTime;
        }
        lastTime = time;

        moved /= 10;

        //console.log('Moved', moved);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        if (direction == 'forward') {
            i += moved;
            if (i > (canvas.width - boy.width)) {
                direction = 'backwards';
                i = canvas.width - boy.width;
            }
        } else {
            i -= moved;
            if (i < 0) {
                direction = 'forward';
                i = 0;
            }
        }

        ctx.drawImage(boy, i, 0);

        requestAnimationFrame(drawFrame);
    }

    requestAnimationFrame(drawFrame);

    document.querySelector('#save').addEventListener('click', function() {
        var url = canvas.toDataURL();
        url = url.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        document.querySelector('#download').href = url;
    });

    var fileInp = document.querySelector('#file');
    fileInp.addEventListener('change', function() {
        if (fileInp.files.length) {
            fileInp.files[0]
        }
    });
});
