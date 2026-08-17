// Digging Minigame



let diggingMinigame;
function startDiggingMinigame() {
    $('#game-frame').css('background-image','url("images/shovel-in.png")');
    diggingMinigame = {
        snowsLeft: 100,
        mode: 'shovelIn'
    };
};



function diggingDigOut() {
    if (diggingMinigame.mode === 'shovelIn') {
        if (diggingMinigame.snowsLeft <= 0) return;
        $('#game-frame').css('background-image','url("images/shovel-out.png")');
        diggingMinigame.mode = 'shovelOut';
        diggingMinigame.snowsLeft--;
        $('#snows-dug-spot').html(`${diggingMinigame.snowsLeft} left!`);
        if (diggingMinigame.snowsLeft === 75) {
            $('#snows-dug-spot').fadeIn(2000);
        }
        else if (diggingMinigame.snowsLeft === 0) {
            $('#snows-dug-spot').html(`Congratulations!`);
            $('#LA-PALA-TEXT').fadeIn(0);
        }
    }
};
function diggingDigIn() {
    if (diggingMinigame.mode === 'shovelOut') {
        $('#game-frame').css('background-image','url("images/shovel-in.png")');
        diggingMinigame.mode = 'shovelIn';
    }
};