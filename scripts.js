var caps = document.createElement('div');
caps.id = 'container';
caps.innerHTML ='<h1>ETCH - A - SKETCH</h1>';

document.body.appendChild(caps);

var boxes = document.createElement('div');
boxes.id = 'box';
 
caps.appendChild(boxes);
function makeBlocks(width) {
    var wides = ((960 - (2 * width)) / width) + "px";
    for (var i = 0; i < width; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < width; j++) {
            var box = document.createElement('div');
            box.className = "box";
            box.style.height = wides;
            box.style.width = wides;
            row.appendChild(box);
        }                
        document.getElementById('box').appendChild(row);
    }
}

makeBlocks(16);