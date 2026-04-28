// Player Data



let player = {
    coins: 0,
    lifetimeCoins: 0,
    ascensionCoins: 0,
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
    fullCompleteTime: false,
    // Ascensions
    ascensions: 0,
    boxLevel: 0,
    doubloons: 0,
    ascUpgrade: []
};



function loadGame() {
    let dataRetrieval = localStorage.getItem('playerData');
    if (dataRetrieval == null) {}
    else {
        playerData = JSON.parse(dataRetrieval);

        // Copy the variables
            // Coins
                if (playerData.coins == null) {player.coins = 0;}
                else {player.coins = playerData.coins;}
                if (playerData.lifetimeCoins == null) {player.lifetimeCoins = 0;}
                else {player.lifetimeCoins = playerData.lifetimeCoins;}
                if (playerData.ascensionCoins == null) {player.ascensionCoins = player.lifetimeCoins;}
                else {player.ascensionCoins = playerData.ascensionCoins;}

            player.timePlayed = playerData.timePlayed;
            player.building = playerData.building;

            // Upgrades
                player.upgrade = playerData.upgrade;
                if (player.upgrade.length < upgradeData.length) {
                    for (var a=player.upgrade.length; a<upgradeData.length; a++) {
                        player.upgrade.push(false);
                    }
                }

            player.puffle = playerData.puffle;
            player.equippedPuffle = playerData.equippedPuffle;
            player.achievement = playerData.achievement;
            player.coinClicks = playerData.coinClicks;

            // Completion Time
                player.fullCompleteTime = playerData.fullCompleteTime;
                if (player.fullCompleteTime == null) {player.fullCompleteTime = false;}

            // Ascension Data
                if (playerData.ascensions == null) {player.ascensions = 0;}
                else {player.ascensions = playerData.ascensions;}
                if (playerData.boxLevel == null) {player.boxLevel = 0;}
                else {player.boxLevel = playerData.boxLevel;}
                if (playerData.doubloons == null) {player.doubloons = 0;}
                else {player.doubloons = playerData.doubloons;}
                player.ascUpgrade = playerData.ascUpgrade;
                if (player.ascUpgrade == null) {
                    player.ascUpgrade = [];
                    for (var a=0; a<ascUpgradeData.length; a++) {
                        player.ascUpgrade.push(false);
                    }
                }
                if (player.ascUpgrade == null | player.ascUpgrade.length < ascUpgradeData.length) {
                    for (var a=player.ascUpgrade.length; a<ascUpgradeData.length; a++) {
                        player.ascUpgrade.push(false);
                    }
                }

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
        ascensionCoins: 0,
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
        fullCompleteTime: false,
        ascensions: 0,
        boxLevel: 0,
        doubloons: 0,
        ascUpgrade: []
    };
    loadPage('main-table');
    startGame();
    loadRightPage('minigame');
    loadMiddlePage('how-to-play');
    displayPuffle();
};