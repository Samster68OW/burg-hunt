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
    ascUpgrade: [],
    ascAchievement: [],
    meatPuffle: -2
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

            if (playerData.timePlayed == null) {player.timePlayed = 0;}
            else {player.timePlayed = playerData.timePlayed;}

            // Buildings
                player.building = playerData.building;
                if (player.building == null) {
                    player.building = [];
                    for (var a=0; a<buildingData.length; a++) {
                        player.building.push({
                            owned: 0, currentCost: buildingData[a].baseCost, coinsPer: 0
                        });
                    }
                }

            // Upgrades
                player.upgrade = playerData.upgrade;
                if (player.upgrade.length < upgradeData.length) {
                    for (var a=player.upgrade.length; a<upgradeData.length; a++) {
                        player.upgrade.push(false);
                    }
                }

            player.puffle = playerData.puffle;
            //if (playerData. == null) {player. = 0;}
            //else {player. = playerData.;}
            if (playerData.equippedPuffle == null) {player.equippedPuffle = -1;}
            else {player.equippedPuffle = playerData.equippedPuffle;}

            // Achievements
                player.achievement = playerData.achievement;
                if (player.achievement == null | player.achievement.length < achievementData.length) {
                    for (var a=player.achievement.length; a<achievementData.length; a++) {
                        player.achievement.push(false);
                    }
                }

            if (playerData.coinClicks == null) {player.coinClicks = 0;}
            else {player.coinClicks = playerData.coinClicks;}

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
            
            // Ascended Achievments
                player.ascAchievement = playerData.ascAchievement;
                if (player.ascAchievement == null) {
                    player.ascAchievement = [];
                    for (var a=0; a<ascAchievementData.length; a++) {
                        player.ascAchievement.push(false);
                    }
                }

            if (playerData.meatPuffle == null) {player.meatPuffle = -2;}
            else {player.meatPuffle = playerData.meatPuffle;}

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
        ascUpgrade: [],
        ascAchievement: [],
        meatPuffle: -2
    };
    loadPage('main-table');
    startGame();
    loadRightPage('minigame');
    loadMiddlePage('how-to-play');
    displayPuffle();
};