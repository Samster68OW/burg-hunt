// Bingo Hunt Style



function loadBingoCard() {
    currentHunt.activity = 'searching';
    $('.hunt-header').html(`Complete the objectives to score 5 in a row, column or diagonal.`);
    // Generate bingo card
        let display = `<table id='bingo-table'>`;
        for (var a=0; a<currentHunt.itemList.length; a++) {
            if (a % 5 === 0) {display += `<tr>`;}
            currentHunt.itemList[a].completed = false;
            display += `<td onclick='toggleCell(${a});' id='bingo-cell${a}'>${currentHunt.itemList[a].obj}</td>`;
            if (a % 5 === 4) {display += `</tr>`;}
        }
        display += `</table>`;
        $('#bingo-card-spot').html(display);
        checkBingoCard();
};



function toggleCell(cell) {
    if (currentHunt.itemList[cell].completed === false) {
        currentHunt.itemList[cell].completed = true;
        $(`#bingo-cell${cell}`).css('background-image','url("images/site/samster68.png")');
    }
    else if (currentHunt.itemList[cell].completed === true) {
        currentHunt.itemList[cell].completed = false;
        $(`#bingo-cell${cell}`).css('background-image','none');
    }
    checkBingoCard();
};



const bingoWins = [
    // Rows
    [ 0, 1, 2, 3, 4],
    [ 5, 6, 7, 8, 9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    // Columns
    [ 0, 5,10,15,20],
    [ 1, 6,11,16,21],
    [ 2, 7,12,17,22],
    [ 3, 8,13,18,23],
    [ 4, 9,14,19,24],
    // Diagonals
    [ 0, 6,12,18,24],
    [ 4, 8,12,16,20]
];
function checkBingoCard() {
    // Check Card
        let winningRows = 0;
        for (var a=0; a<bingoWins.length; a++) {
            let goodRow = true;
            for (var b=0; b<bingoWins[a].length; b++) {
                if (currentHunt.itemList[bingoWins[a][b]].completed === false) {
                    goodRow = false;
                }
            }
            if (goodRow === true) {winningRows++;}
        }
    // Result
        $('#submit-button-2').removeClass('btn-success');
        $('#submit-button-2').removeClass('btn-danger');
        if (winningRows === 0) {
            $('#submit-button-2').html('Keep playing to score 5 in a row.');
            $('#submit-button-2').addClass('btn-danger');
            return false;
        }
        else if (winningRows === 12) {
            $('#submit-button-2').html('Click to turn in your BIG WIN!');
            $('#submit-button-2').addClass('btn-success');
            return true;
        }
        else {
            $('#submit-button-2').html('Click to turn in your Bingo Card!');
            $('#submit-button-2').addClass('btn-success');
            return true;
        }
};



function submitBingoCard() {
    if (checkBingoCard() === false) {return}
    completeHunt();
};