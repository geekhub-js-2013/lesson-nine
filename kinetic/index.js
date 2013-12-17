var stage = new Kinetic.Stage({
    container: 'c',
    width: 500,
    height: 500
});

var layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
    x: 239,
    y: 75,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4
});

// add the shape to the layer
layer.add(rect);

var circle = new Kinetic.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

var imageObj = new Image();
imageObj.onload = function() {
    var boy = new Kinetic.Image({
        x: 100,
        y: 50,
        image: imageObj
    });

    // add the shape to the layer
    layer.add(boy);

    layer.draw();
};
imageObj.src = 'res/Character Boy.png';