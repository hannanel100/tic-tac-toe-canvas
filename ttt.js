var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let boardSize = 600;
let boxSize = boardSize / 3;
(function drawBoard() {
    for (let x = 1; x < 3; x++) {
        ctx.moveTo(0, boxSize * x);
        ctx.lineTo(boardSize, boxSize * x);
    }
    for (let y = 1; y < 3; y++) {
        ctx.moveTo(boxSize * y, 0);
        ctx.lineTo(boxSize * y, boardSize);
    }
    ctx.stroke();
}());

var isX = true;

let x = document.getElementById("x");
let o = document.getElementById("o");
x.addEventListener("click", function () {
    add(Number(document.getElementById("position").value))
});
o.addEventListener("click", function () {
    isX = false;
    add(Number(document.getElementById("position").value))
});
let results = [];

function add(boxNum) {

    console.log(boxNum);
    if (isX === true) {
        results[boxNum] = 'X';
        writeX(boxNum);
    }
    else {
        results[boxNum] = 'O';
        writeO(boxNum);
        isX = true;
    }
    checkWinner(results);
}


function writeX(boxNum) {
    var offset = 25;
    var xCordinate = boxNum % 3 * boxSize;
    var yCordinate = Math.floor(boxNum / 3) * boxSize;  
    ctx.moveTo(xCordinate, yCordinate);
    ctx.lineTo(xCordinate + boardSize / 3, yCordinate + boardSize / 3);
    ctx.moveTo(xCordinate, yCordinate + boardSize / 3);
    ctx.lineTo(xCordinate + boardSize / 3, yCordinate);
    ctx.stroke();
}

function writeO(boxNum) {
    var xCordinate = 100+boxNum % 3 * boxSize;
    var yCordinate = 100+Math.floor(boxNum / 3) * boxSize;
    ctx.beginPath();
    ctx.arc(xCordinate,yCordinate,50,0,2 * Math.PI);
    ctx.stroke();
}

function checkWinner(arr) {
    if (//horizontal
        (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") ||
        (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") ||
        (arr[6] == "X" && arr[7] == "X" && arr[8] == "X")
    ) {
        alert("X wins!");

    } else if (
        (arr[0] == "O" && arr[1] == "O" && arr[2] == "O") ||
        (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") ||
        (arr[6] == "O" && arr[7] == "O" && arr[8] == "O")
    ) {
        alert("O wins!");
    }
    if (//lateral
        (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") ||
        (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") ||
        (arr[2] == "X" && arr[5] == "X" && arr[8] == "X")
    ) {
        alert("X wins!");
    } else if (
        (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") ||
        (arr[1] == "O" && arr[4] == "O" && arr[7] == "O") ||
        (arr[2] == "O" && arr[5] == "O" && arr[8] == "O")
    ) {
        alert("O wins!");
    }
    if (//diagonal
        (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") ||
        (arr[2] == "X" && arr[4] == "X" && arr[6] == "X")
    ) {
        alert("X wins!");
    } else if (
        (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") ||
        (arr[2] == "O" && arr[4] == "O" && arr[6] == "O")

    ) {
        alert("O wins!");
    }

}