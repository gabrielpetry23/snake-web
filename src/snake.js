var tamBloco = 25;
var larguraTela = 20;
var alturaTela = 20;
var tela;
var c;
var unidade = larguraTela * alturaTela / (tamBloco * tamBloco);

var snakeX = tamBloco * 5;
var snakeY = tamBloco * 5;
var snakeBody = [];

var macaX;
var macaY;

var eixoX = 0;
var eixoY = 0;

window.onload = function() {
    tela = document.getElementById("tela");
    tela.height = alturaTela * tamBloco;
    tela.width = larguraTela * tamBloco;
    c = tela.getContext("2d");
    criarMaca();
    document.addEventListener("keyup", changeDirection);
    setInterval(desenhaTela, 1000/10); //100 milisegundos
}

function desenhaTela () {
    c.fillStyle="black";
    c.fillRect(0, 0, tela.width, tela.height);

    c.fillStyle="red";
    c.fillRect(macaX, macaY, tamBloco, tamBloco);

    if (snakeX == macaX && snakeY == macaY) {
        snakeBody.push([macaX, macaY])
        criarMaca();
    }

    for (let i = snakeBody.length-1 ; i > 0 ; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    c.fillStyle="lime";
    snakeX += eixoX * tamBloco;
    snakeY += eixoY * tamBloco;
    c.fillRect(snakeX, snakeY, tamBloco, tamBloco);

    for (let i = 0 ; i < snakeBody.length ; i++) {
        c.fillRect(snakeBody[i][0], snakeBody[i][1], tamBloco, tamBloco);
    }
}

function criarMaca() {
    macaX = Math.floor(Math.random() * larguraTela) * tamBloco;
    macaY = Math.floor(Math.random() * alturaTela) * tamBloco;
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && eixoY != 1) {
        eixoX = 0;
        eixoY = -1;
    }
    else if (e.code == "ArrowDown" && eixoY != -1) {
        eixoX = 0;
        eixoY = 1;
    }
    if (e.code == "ArrowLeft" && eixoX != 1) {
        eixoX = -1;
        eixoY = 0
    }
    if (e.code == "ArrowRight" && eixoX != -1) {
        eixoX = 1;
        eixoY = 0
    }
}
