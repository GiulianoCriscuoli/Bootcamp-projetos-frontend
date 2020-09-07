let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // cria uma plataforma
let box = 32;

function createBG() {
    // coloca uma cor
    context.fillStyle = "lightblue"; 
    
    //fillRect tem 4 parametros altura, largura,x e y
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

createBG();