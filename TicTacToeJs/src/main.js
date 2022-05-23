/* SELECT THE CELLS IN HTML */
let cells = document.querySelectorAll('.celda');
cells = Array.from(cells);

let currentPlayer = 'X';

/* WINNERS COMBINATIONS */
let winninCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]; 

/* WHAT IS THE WINNER? */
function checkForWinner () {
    winninCombinations.forEach((combination) => {
        let check = combination.every(indx => cells[indx].innerText.trim() == currentPlayer);
        if(check) {
            highligthCells(combination);
        };
    });
};

/* THIS IS THE WINNER! */
function highligthCells(combination) {
    combination.forEach(function (idx) {
        cells[idx].classList.add('highligth');
    });
};


/* FUNCTION FOR INSERT 'X' AND '0' */
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.innerText.trim() != '') return
        cell.innerText = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer == 'X' ? '0' : 'X';
    });
});


/* FUNCTION FOR REFRESH*/
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
});
