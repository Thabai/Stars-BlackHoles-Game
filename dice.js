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
let holes = [7, 11, 18, 24, 29];

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

let player0 = 0;
let player2 = 0;
let activePlayer = 0;


function playerPos() {
    if (player0 >= 30 || player2 >= 30)
    {
        return;
    }
    let player0Position = document.getElementById('0-' + player0);
    player0Position.classList.add('player0');
    let player2Position = document.getElementById('2-' + player2);
    player2Position.classList.add('player2');

}

playerPos()

document.querySelector('.btn-roll').addEventListener('click', function () {

    let playerPosition = activePlayer === 0 ? player0 : player2;
    let lastPlayerPosition = document.getElementById(activePlayer + '-' + playerPosition);
    lastPlayerPosition.classList.remove('player' + activePlayer);
    // 1. random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. display result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice' + dice + '.png';
    //update position
    playerPosition += dice;
    if (activePlayer === 0) {
        player0 = playerPosition;
    } else {
        player2 = playerPosition;
    }
    playerPos();
    
    // delay for rules & popups
    setTimeout(function () {
        let lastPlayerPosition = document.getElementById(activePlayer + '-' + playerPosition);
        lastPlayerPosition.classList.remove('player' + activePlayer);

        if (stars.includes(playerPosition)) {
            playerPosition += 5;
            document.getElementById('hitStar').textContent += 'You ride on a star +5';
            setTimeout(function () {
                document.getElementById('hitStar').textContent = '';
            }, 1500);

        }
        if (holes.includes(playerPosition)) {
            playerPosition -= 3;
            document.getElementById('hitHole').textContent += 'Oh no! You get pulled into a black hole -3';
            setTimeout(function () {
                document.getElementById('hitHole').textContent = '';
            }, 1500);

        }
        if (playerPosition >= 30) {
            document.getElementById('winner').textContent += 'Winner!';
        }
        
        if (activePlayer === 0) {
            player0 = playerPosition;
        } else {
            player2 = playerPosition;
        }
        playerPos()
        nextPlayer()
    }, 1000);

});

function nextPlayer () {
    activePlayer ===0 ? activePlayer = 2 : activePlayer = 0;
}

document.querySelector('.restart').addEventListener('click', function () {
    document.location.href = "";
})










// // //rules tab
// // document.querySelector('.btn-new').addEventListener('click', init);

// // document.querySelector('.btn-rules').addEventListener('click', function(){
// // 	    let games = document.getElementsByClassName('game-panel');
// // 		for(i=0;i<games.length;i++){
// // 			games[i].style.display = 'none';
// // 		}

// // 	    document.querySelector('.btn-back').style.display = 'block';
// // 		let rules = document.getElementsByClassName('rules-panel');
// // 		for(i=0;i<rules.length;i++){
// // 			rules[i].style.display = 'block';
// // 		}

// // });

// // document.querySelector('.btn-back').addEventListener('click', function(){
// // 	    let games = document.getElementsByClassName('game-panel');
// // 		for(i=0;i<games.length;i++){
// // 			games[i].style.display = 'block';
// // 		}

// // 	    document.querySelector('.btn-back').style.display = 'none';
// // 		let rules = document.getElementsByClassName('rules-panel');
// // 		for(i=0;i<rules.length;i++){
// // 			rules[i].style.display = 'none';
// // 		}

// // });