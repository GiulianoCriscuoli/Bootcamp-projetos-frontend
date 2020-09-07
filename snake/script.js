let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // cria uma plataforma
let box = 32;
snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} 

let direction ="right";

function createBG() {
    // coloca uma cor
    context.fillStyle = "lightblue"; 

    //fillRect tem 4 parametros x, y, largura e altura
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

function createSnake() {
    for(let i = 0; i < snake.length; i++) {
        context.fillStyle = "yellow";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }  
}

function startGame() {
    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === "right") snakeX += box;
    if(direction === "left") snakeX -= box;
    if(direction === "up") snakeY -= box;
    if(direction === "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
