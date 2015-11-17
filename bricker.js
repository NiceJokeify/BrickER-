
var fieldW = 600; //width of the field of the game
var fieldH = 600; //height of the field of the game

var brickStartY = 45; // distance of bricks from top
var brickRows = 3; // Three long bricks 

var brickColor = [
    // Lithuanian Flag
    "hsla(52, 100%, 54%, 1)",
    "hsla(118, 53%, 33%, 1)",
    "hsla(0, 68%, 48%, 1)",
];

var brickW = 50; //width of the brick
var brickH = 20; //height of the brick

var beachBlue = "#098795"; //giving color to beachBlue
var white = "#ffffff";
var canvas;

var brickColumns = fieldW / brickW; //size of the brick columns
var bricks = []; //bricksArr

function setupBricks() {
    var x, y;
    for (y = 0; y < brickRows; y++) {
        for (x = 0; x < brickColumns; x++) {
            bricks[x + y * brickColumns] = true;
        }
    }
}

function drawPicture(){
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = beachBlue; // give canvas nice and eye friendly color
    ctx.fillRect(0, 0, fieldW, fieldH); 
    
    var x, y;
    for (y = 0; y < brickRows; y++) {
        ctx.fillStyle = brickColor[y];
        for (x = 0; x < brickColumns; x++) {
            if (bricks[x + y * brickColumns] ) {
                ctx.fillRect(brickW * x, brickStartY + brickH * y,
                                 brickW, brickH);
            }
        }
    }
}


function startGame() {
    setupBricks();
}

function step() {
    drawPicture();
}

function setupGlobals() {
    canvas = document.getElementById('gameCanvas');
}

function game() { //execute
    setupGlobals();
    setupBricks();
    setInterval(step, 15); // how often execution will take place
}

