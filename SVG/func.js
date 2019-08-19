let Line = {};
let aSvg;
let w;
let draw = false;
let style;
let width;

let styleValue;
let widthValue;

let SVGline = function () {

}

Line = new SVGline();

SVGline.prototype.createline = function (x1, y1, color, w) {
    let aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x1 + 1);
    aLine.setAttribute('y2', y1 + 1);
    aLine.setAttribute('stroke', color);
    aLine.setAttribute('stroke-width', w);
    return aLine;
}


function onMouseDown(e) {
    draw = true;
}

function onMouseUp(e) {
    draw = false;
}

function onMouseMove(e) {
    if (draw) {
        let aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        aLine.setAttribute('x1', e.clientX);
        aLine.setAttribute('y1', e.clientY);
        aLine.setAttribute('x2', e.clientX - 1);
        aLine.setAttribute('y2', e.clientY - 0);
        aLine.setAttribute('stroke', style.value);
        aLine.setAttribute('stroke-width', width.value);

        const handledValue = {
            x: e.clientX,
            y: e.clientY,
            width: width.value,
            color: style.value,
        };

        pushData(handledValue);

        aSvg.appendChild(aLine);
        w.appendChild(aSvg);
    }
}

function onChangeColor(e) {
    styleValue = e.value;
}

function onChangeWidth(e) {
    widthValue = e.value;
}

function pushData(value) {
    data.style = value.style;
    data.x = value.x;
    data.y = value.y;
    data.width = value.width;
}

function init() {
    aSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    aSvg.setAttribute('width', 1280);
    aSvg.setAttribute('height', 720);
    style = document.getElementById('color');
    width = document.getElementById('width');
    w = document.getElementById('paintID');

    w.onmousedown = onMouseDown;
    w.onmousemove = onMouseMove;
    w.onmouseup = onMouseUp;
    style.onchange = onChangeColor;
    width.onchange = onChangeWidth;
}

init();