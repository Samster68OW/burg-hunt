// Player Data



let player = {
    coins: 0,
    lifetimeCoins: 0,
    timePlayed: 0,
    coinsPerClick: 1,
    cpts: 0,
    cptsMult: 1,
    building: [],
    upgrade: [],
    puffle: [],
    equippedPuffle: -1,
    achievement: [],
    coinClicks: 0,
    debug: false,
    fullCompleteTime: false
};



function loadGame() {
    let dataRetrieval = localStorage.getItem('playerData');
    if (dataRetrieval == null) {}
    else {
        playerData = JSON.parse(dataRetrieval);

        // Copy the variables
            player.coins = playerData.coins;
            player.lifetimeCoins = playerData.lifetimeCoins;
            player.timePlayed = playerData.timePlayed;
            player.building = playerData.building;
            player.upgrade = playerData.upgrade;
            player.puffle = playerData.puffle;
            player.equippedPuffle = playerData.equippedPuffle;
            player.achievement = playerData.achievement;
            player.coinClicks = playerData.coinClicks;
            player.fullCompleteTime = playerData.fullCompleteTime;
            if (player.fullCompleteTime == null) {player.fullCompleteTime = false;}

    }
};
function saveGame() {
    // Save
        localStorage.setItem('playerData', JSON.stringify(player));
    // Show popup
        $('#save-popup').fadeIn(0);
        setTimeout(function(){
            $('#save-popup').fadeOut(2000);
        },3000);
};
function resetGame() {
    if (confirm("Would you like to reset your game?") === false) {return;}
    localStorage.clear('playerData');
    clearInterval(gameLoop);
    player = {
        coins: 0,
        lifetimeCoins: 0,
        timePlayed: 0,
        coinsPerClick: 1,
        cpts: 0,
        cptsMult: 1,
        building: [],
        upgrade: [],
        puffle: [],
        equippedPuffle: -1,
        achievement: [],
        coinClicks: 0,
        debug: false,
        fullCompleteTime: false
    };
    loadPage('main-table');
    startGame();
    loadRightPage('minigame');
    loadMiddlePage('how-to-play');
    displayPuffle();
};