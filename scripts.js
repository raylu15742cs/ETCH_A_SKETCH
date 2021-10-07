var caps = document.createElement('div');
caps.id = 'container';
caps.innerHTML ='<h1>ETCH - A - SKETCH</h1>';
document.body.appendChild(caps);

var box2 = document.createElement('div');
box2.id = "box2";
document.body.appendChild(box2);

var box3 = document.createElement('div');
box3.id = "box3";
box2.appendChild(box3);

var button = document.createElement('button');
button.id = 'clear';
button.innerHTML = 'Clear the Grid';
box3.appendChild(button);

var choice = document.createElement('button');
choice.id = 'choices';
choice.innerHTML = 'Make new box';
box3.appendChild(choice);
function createsbox() {
    var boxes = document.createElement('div');
    boxes.id = 'box';
    numbox = 0;
    box2.appendChild(boxes);
}

createsbox();


function makeBlocks(width) {
    var wides = ((960 - (2 * width)) / width) + "px";
    for (var i = 0; i < width; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < width; j++) {
            var box = document.createElement('div');
            box.className = "box";
            box.id = numbox;
            numbox += 1;
            box.style.height = wides;
            box.style.width = wides;
            row.appendChild(box);
        }                
        document.getElementById('box').appendChild(row);
    }
    for (var i = 0; i < numbox; i++ ) {
        const boxselect = document.getElementById(i)
        boxselect.addEventListener('mouseover', function() {
            boxselect.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        })
    }
    for (var i = 0; i < numbox; i++ ) {
        const clearbox = document.getElementById(i)
        document.getElementById('clear').addEventListener('click', function() {
            clearbox.style.backgroundColor = "white";
    })
    
}
}
makeBlocks(16);
//random color generator'#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6) //


document.getElementById('choices').addEventListener('click', function() {
    newheight = prompt('Enter value from 1 - 100');
    document.getElementById('box').remove();
    createsbox();
    makeBlocks(newheight);
})