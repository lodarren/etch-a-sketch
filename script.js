//Sets up the board with boxes x boxes size
function boardsetup(boxes) {

    var div = new Array(boxes);
        for(var i = 0; i<boxes; i++) {
            div[i] = new Array(boxes);
        }
    

    for (var i = 0; i < boxes; i++) {
        var row = document.createElement("div");
        row.style.width = `${20 * boxes}px`;
        row.style.height = "20px";
        for (var j = 0; j < boxes; j++) {
            div[i][j] = document.createElement("div");
            div[i][j].style.border = "thin solid black";
            div[i][j].style.width = "20px";
            div[i][j].style.height = "20px";
            div[i][j].style.backgroundColor = "white";
            //div[i][j].textContent = `${i}, ${j}`;
            div[i][j].style.opacity = "0.0";
            div[i][j].style.backgroundColor = randomColourPicker();

            div[i][j].addEventListener('mouseover', function(e) {
                var currentOpacity = parseFloat(e.target.style.opacity || 0);
                if (currentOpacity < 1.0) {
                    e.target.style.opacity = (currentOpacity + 0.1).toString();
                }
            });

            row.appendChild(div[i][j])


        }
        document.getElementById("board").appendChild(row);
    }

    document.getElementById("board").style.width = `${20 * boxes + 2 * 0.8 * boxes}px`;
    document.getElementById("board").style.height = `${20 * boxes + 2 * 0.8 * boxes}px`;
    document.getElementById("reset").addEventListener("click", resetFunction);

}

//Returns a random colour (out of 10 possible colours)
function randomColourPicker() {
    color = Math.floor(Math.random(10) * 10) + 1;

    switch(color) {
        case 0:
          return "black"
        case 1:
          return "blue"
        case 2:
            return "red"
        case 3:
            return "orange"
        case 4:
            return "yellow"
        case 5:
            return "green"
        case 6:
            return "pink"
        case 7:
            return "violet"
        case 8:
            return "cyan"
        case 9:
            return "brown"
        default:
          return "grey"
      }

}

//Prompts the user to pick a number between 1 and 100, then initializes the board with that setup
function resetFunction(event) {
    let size = prompt("Please enter how many boxes per row/column. ", "Please pick a number between 1 and 100.");

    if (!size) {
        alert("Not a valid number!");
        return;
    }

    size = parseInt(size);

    if (isNaN(size)) {
        alert("Not a valid number!");
        return;
    }

    if (size > 100 || size < 1) {
        alert("Please pick a number between 1 and 100.");
        return;
    }

    var board = document.getElementById("board");
    board.innerHTML = ""; 
    boardsetup(size);
}

// main function
function main() {
    boardsetup(16);
}

main();

