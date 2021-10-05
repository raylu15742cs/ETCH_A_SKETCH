var caps = document.createElement('div');
caps.id = 'container';
caps.innerHTML ='container';

document.body.appendChild(caps);

var boxes = document.createElement('div');
boxes.id = 'box';
 
caps.appendChild(boxes);

function makeBlocks(width) {
    for (var i = 0; i < width; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < width; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('box').appendChild(row);
    }
}

makeBlocks(16);