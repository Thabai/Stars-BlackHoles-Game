const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid
function defaultGrid() {
    makeRows(3);
    makeColumns(31);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.setAttribute('id',i+'-'+j)
            rows[i].appendChild(newCell).className = "cell";
        };

    };
};
defaultGrid();

let stars = [5, 12, 20, 28];
let holes = [7, 11, 18, 25, 29];

function createMap() {
    for (i = 0; i < stars.length; i++) {
        let star = document.getElementById('1-'+stars[i]);
      star.classList.add('stars');
    
    }
    for (i = 0; i < holes.length; i++) {
        let hole = document.getElementById('1-'+holes[i]);
        hole.classList.add('holes');
    }
}
createMap();


let player1 = 0;
let player2 = 0;
// "0-"+player1;
// "2-"+player2;


document.querySelector('.btn-roll').addEventListener('click', function(){
    let posLast = document.getElementById('0-'+player1);
    posLast.classList.remove('player1');
//	if (rollDice) {
		// 1. random number
		let dice = Math.floor(Math.random() * 6) +1;

		// 2. display result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'images/dice' + dice + '.png'; 

// function updatePlayerPos(){

            player1 += dice; 
    
        if (stars.includes(player1)){
            player1 += 5; 
        }
        if(holes.includes(player1)){
            player1 -= 3;
        } 
// }})
        
if (player1 >= 30) {
    //winer situation

    //remove button

    //add reset button
}
// function decoratePos() {
        let pos = document.getElementById('0-'+player1);
        
        pos.classList.add('player1');
        
// }
// decoratePos()
        // "0-"+player1;
   // }
    })

