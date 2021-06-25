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
            newCell.setAttribute('id', i + '-' + j)
            rows[i].appendChild(newCell).className = "cell";
        };

    };
};
defaultGrid();

let stars = [5, 12, 20, 28];
let holes = [7, 11, 18, 25, 29];

function createMap() {
    for (i = 0; i < stars.length; i++) {
        let star = document.getElementById('1-' + stars[i]);
        star.classList.add('stars');

    }
    for (i = 0; i < holes.length; i++) {
        let hole = document.getElementById('1-' + holes[i]);
        hole.classList.add('holes');
    }
}
createMap();

// const btnRoll = document.querySelector('.btn-roll');
let player1 = 0;
let player2 = 0;
// "0-"+player1;
// "2-"+player2;

function playerPos() {
    let pos = document.getElementById('0-' + player1);
    pos.classList.add('player1');
    // let pos = document.getElementById('2-' + player2);
    // pos.classList.add('player2');
}

playerPos();

document.querySelector('.restart').addEventListener('click', function () {
    document.location.href = "";
})

document.querySelector('.btn-roll').addEventListener('click', function () {
    let posLast = document.getElementById('0-' + player1);
    posLast.classList.remove('player1');
    //	if (rollDice) {
    // 1. random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice' + dice + '.png';

    // function updatePlayerPos(){

    player1 += dice;
    playerPos()
    

    setTimeout(function () {
        let posLast = document.getElementById('0-' + player1);
        posLast.classList.remove('player1');

        if (stars.includes(player1)) {
            player1 += 5;
            document.getElementById('hitStar').textContent += 'You ride on a star +5';
            setTimeout(function () {
                document.getElementById('hitStar').textContent = '';
            }, 1500);
            
            // }
        }
        if (holes.includes(player1)) {
            player1 -= 3;
            document.getElementById('hitHole').textContent += 'Oh no! You get pulled into a black hole -3';
            setTimeout(function () {
                document.getElementById('hitHole').textContent = '';
            }, 1500);
            
        }
        if (player1 >= 30) {
            document.getElementById('winner').textContent += 'Winner!';
        }
        // else
        //disable button
        // disableBtn(btnRoll, 1000);
        // nextPlayer();	
        playerPos()

    }, 1500);
    if (player1 >= 30) {
        document.getElementById('winner').textContent += 'Winner!';
    }
});










// function nextPlayer() {
// 	//next player
// 		var icons = document.getElementsByTagName('button');
// 		for(i=0;i<icons.length;i++){
// 			icons[i].classList.remove(activePlayer);
// 		}

// 		document.querySelector('.dice').style.display = 'none';
// 		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
// 		activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
// 		//stop score being carried over to other player
// 		roundScore = 0;

// 		for(i=0;i<icons.length;i++){
// 			icons[i].classList.add(activePlayer);
// 		}
// 		document.querySelector('.player-' + activePlayer + '-panel').classList.add('active-' + activePlayer);
// 		document.querySelector('#current-0').textContent = '0';
// 		document.querySelector('#current-1').textContent = '0';
// }

// function init() {
// 	scores = [0,0];
// 	roundScore = 0;
// 	activePlayer = 0;
// 	gamePlaying = true;

// 	document.getElementById('score-0').textContent = '0';
// 	document.getElementById('score-1').textContent = '0';
// 	document.getElementById('current-0').textContent = '0';
// 	document.getElementById('current-1').textContent = '0';

// 	hideRolledMsg()

// 	document.querySelector('#name-0').textContent = 'Enter name';
// 	document.querySelector('#name-1').textContent = 'Enter name';
// 	document.querySelector('.player-0-panel').classList.add('active-0');
// 	document.querySelector('.player-0-panel').classList.remove('winner-0');
// 	document.querySelector('.player-1-panel').classList.remove('winner-1');

// }


// //rules tab
// document.querySelector('.btn-new').addEventListener('click', init);

// document.querySelector('.btn-rules').addEventListener('click', function(){
// 	    let games = document.getElementsByClassName('game-panel');
// 		for(i=0;i<games.length;i++){
// 			games[i].style.display = 'none';
// 		}

// 	    document.querySelector('.btn-back').style.display = 'block';
// 		let rules = document.getElementsByClassName('rules-panel');
// 		for(i=0;i<rules.length;i++){
// 			rules[i].style.display = 'block';
// 		}

// });

// document.querySelector('.btn-back').addEventListener('click', function(){
// 	    let games = document.getElementsByClassName('game-panel');
// 		for(i=0;i<games.length;i++){
// 			games[i].style.display = 'block';
// 		}

// 	    document.querySelector('.btn-back').style.display = 'none';
// 		let rules = document.getElementsByClassName('rules-panel');
// 		for(i=0;i<rules.length;i++){
// 			rules[i].style.display = 'none';
// 		}

// });