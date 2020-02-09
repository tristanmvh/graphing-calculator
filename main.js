var graph = document.getElementById("canvas");
var ctx = graph.getContext("2d");
var points = 0;
var pos;
ctx.clearRect(0, 0, 800, 800)
// default graph size
graph.width = 850;
graph.height = 850;

localStorage.clear();
function item(item) {
    return localStorage.getItem(item);
}
class Grid {
    constructor() {

    }

    x() {
        for (var i = 1; i <= 8;) {
            ctx.beginPath();
            ctx.strokeStyle = "lightgrey";
            ctx.moveTo(10, i * 100 + 10);
            ctx.lineTo(810, i * 100 + 10);
            ctx.stroke();
            i++;
}}

    y() {
        for (var i = 1; i <= 8;) {
            ctx.beginPath();
            ctx.strokeStyle = "lightgrey";
            ctx.moveTo(i * 100 + 10, 10);
            ctx.lineTo(i * 100 + 10, 810);
            ctx.stroke();
            i++;
}}

    place() {
        for (var i = 0; i < 8;) {
            for (var j = 0; j < 8;) {
                for (var k = -4; k <= 4;) {
                    for (var l = 4; l > -5;) {
                        ctx.fillStyle = "black";
                        ctx.font = "20px Serif";

                        ctx.fillText(k, i * 100 + 5, 830);
                        ctx.fillText(l, 815, j * 100 + 15);
                        i++
                        j++
                        k++
                        l--
                    }}}};
                    ctx.fillStyle = "red";
                    ctx.fillText("x", 795, 405);
                    ctx.fillStyle = "green";
                    ctx.fillText("y", 415, 25);

    }

    border() {
        //left
        ctx.beginPath();
        ctx.strokeStyle = "lightgrey";
        ctx.moveTo(10, 10);
        ctx.lineTo(810, 10);

        //top
        ctx.strokeStyle = "lightgrey";
        ctx.moveTo(10, 10);
        ctx.lineTo(10, 810);
        ctx.stroke();
    }

    axis() {
        for (var i = 1; i <= 2;) {
            ctx.beginPath();
            ctx.strokeStyle = "black";

            //x-axis
            ctx.moveTo(10, 410);
            ctx.lineTo(810, 410);

            //y-axis
            ctx.moveTo(410, 10);
            ctx.lineTo(410, 810);
            ctx.stroke();
            i++;
        }}

    shape() {
        for(var i = 1; i <= 2;) {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        //x
        ctx.moveTo(410, pos.y);
        ctx.lineTo(pos.x, pos.y);
        //y
        ctx.moveTo(pos.x, 410);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
i++
}}

}
var grid = new Grid();

grid.x();
grid.y();
grid.place();
grid.border();
grid.axis();

//set point
document.getElementById("set").onclick = function () {
    points++; 
    pos = {
        x: eval(document.getElementById("x-pos").value),
        y: eval(document.getElementById("y-pos").value)
    };
console.log(pos);
grid.shape();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.arc(pos.x, pos.y, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
localStorage.setItem(`point${points}_x`, pos.x);
localStorage.setItem(`point${points}_y`, pos.y);


} 
document.getElementById("remove-shapes").onclick = function () {
if(localStorage.length === 0) return; else {
    ctx.clearRect(0, 0, graph.width, graph.height);
    
    grid.x();
    grid.y();
    grid.place();
    grid.border();
    grid.axis();

    for(var i = 1; i <= points;) {
        ctx.beginPath()
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.arc(eval(item(`point${i}_x`)), eval(item(`point${i}_y`)), 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
i++
    }
}
}

document.getElementById("draw-line").onclick = function () {
    ctx.beginPath();
    ctx.strokeStyle("red");
}