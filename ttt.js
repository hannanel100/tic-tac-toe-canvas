var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 900);
ctx.moveTo(600, 0);
ctx.lineTo(600, 900);
ctx.moveTo(0, 300);
ctx.lineTo(900, 300);
ctx.moveTo(0, 600);
ctx.lineTo(900, 600);
ctx.stroke();
var isX = true;
let position = document.getElementById("position");
let x = document.getElementById("x");
let o = document.getElementById("o");
x.addEventListener("click", function () {
    add();
});
o.addEventListener("click", function () {
    isX = false;
    add();
});
let results = [];

function add() {
    
        console.log(results);
        if (isX === true) {
            results[position.value] = 'X';
            writeX();
            console.log(results);
        }
        else {
            results[position.value] = 'O';
            writeO();
            console.log(results);
            isX = true;
        }
        checkWinner(results);
    }
    

function writeX() {
    if (position.value == 0 || position.value == 3 || position.value == 6) {
        ctx.moveTo(100, 100 + (position.value * 100));
        ctx.lineTo(200, 200 + (position.value * 100));
        ctx.moveTo(200, 100 + (position.value * 100));
        ctx.lineTo(100, 200 + (position.value * 100));
        ctx.stroke();
    }
    else if (position.value == 1 || position.value == 4 || position.value == 7) {
        ctx.moveTo(400, (position.value * 100));
        ctx.lineTo(500, 100 + (position.value * 100));
        ctx.moveTo(500, (position.value * 100));
        ctx.lineTo(400, 100 + (position.value * 100));
        ctx.stroke();
    }
    else if (position.value == 2 || position.value == 5 || position.value == 8) {
        ctx.moveTo(700, (position.value * 100) - 100);
        ctx.lineTo(800, (position.value * 100));
        ctx.moveTo(800, (position.value * 100) - 100);
        ctx.lineTo(700, (position.value * 100));
        ctx.stroke();
    }


}

function writeO() {
    if (position.value == 0 || position.value == 3 || position.value == 6) {
        ctx.beginPath();
        ctx.arc(150, 150 + (position.value * 100), 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
    else if (position.value == 1 || position.value == 4 || position.value == 7) {
        ctx.beginPath();
        ctx.arc(450, 50 + (position.value * 100), 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
    else if (position.value == 2 || position.value == 5 || position.value == 8) {
        ctx.beginPath();
        ctx.arc(750, (position.value * 100) - 50, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }

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