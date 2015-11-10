
var fieldW = 600;
var fieldH = 600;
var beachBlue = "#098795";
var white = "#ffffff";
var canvas;



function drawPicture(){
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = beachBlue; // give canvas nice and friendly color
    
    ctx.fillRect(0, 0, fieldW, fieldH);  
}




function step() {
    
    drawPicture();
}

function setupGlobals() {
    canvas = document.getElementById('gameCanvas');

}

function game() { //execute
    setupGlobals();

    setInterval(step, 15); // how often execution will take place
}

