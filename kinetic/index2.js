var stage = new Kinetic.Stage({
    container: 'c',
    width: 500,
    height: 500
});

var layer = new Kinetic.Layer();
stage.add(layer);

var imageObj = new Image();
imageObj.onload = function() {
    var boy = new Kinetic.Image({
        x: 100,
        y: 50,
        image: imageObj,
        offset: {
            x: imageObj.width /2,
            y: imageObj.height / 2
        }
    });

    // add the shape to the layer
    layer.add(boy);

    layer.draw();

    var tween = new Kinetic.Tween({
        node: boy,
        duration: 1,
        rotation: Math.PI * 2,
        opacity: 0
    });

    tween.play();

    setInterval(function() {
        boy.setOpacity(1);
        layer.draw();
        tween.reset();
        tween.play();
    }, 2000);
};
imageObj.src = 'res/Character Boy.png';


var layer2 = new Kinetic.Layer();
stage.add(layer2);

var imageObj2 = new Image();
imageObj2.onload = function() {
    var girl = new Kinetic.Image({
        x: 100,
        y: 200,
        image: imageObj2,
        offset: {
            x: imageObj.width /2,
            y: imageObj.height / 2
        }
    });
    var girl2 = new Kinetic.Image({
        x: 100,
        y: 200,
        image: imageObj2,
        offset: {
            x: imageObj.width /2,
            y: imageObj.height / 2
        }
    });

    // add the shape to the layer
    layer2.add(girl);layer2.add(girl2);

    layer2.draw();

    var amplitude = 150;
    var period = 2000;
// in ms
    var centerX = stage.getWidth() / 2;

    var anim = new Kinetic.Animation(function(frame) {
        girl.setX(frame.time / 100);
        girl2.setY(frame.time / 100);
    }, layer2);

    anim.start();
};
imageObj2.src = 'res/Character Cat Girl.png';
