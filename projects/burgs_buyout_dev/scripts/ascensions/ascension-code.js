// Ascending



function clickBox() {
    $('#void-box').removeClass('boxShrinkClass');
    if (confirm("Are you sure you want to open the box?") === false) {return;}

    // Stop everything and load the animation
        clearInterval(gameLoop);
        loadPage('box-open-animation');
        resetSound('BG Music');
        playSound('Box Opened');
        gameStarted = false;
    
    // Load the Box Dimension
        grantDoubloons();
        $('#doubloon-box-spot').html(`Doubloons: ${player.doubloons} ${emojiInsert('doubloon')}`);
        $('#box-level-spot').html(`Box Level: ${disNum(player.boxLevel)} ${emojiInsert('box')} (+ ${disNum(player.boxLevel * 10)}% ${emojiInsert('coin')})`);
        placeAscUpgrades();
    
    // Play shrinking animation
        setTimeout(function() {
            playSound('Box Shrink');
            $('#void-box').addClass('boxShrinkClass');
        },2000);
        setTimeout(function() {
            $('#box-open-animation').fadeOut(0);
        },5000);
        setTimeout(function() {
            $('#box-dim-table').fadeIn(2000);
            playSound('BG Music - Box');
        },7000);

};



let potentialBoxLevel = 0;
let nextCoinGoal;
function updateCoinGoal() {
    nextCoinGoal = Math.pow(boxExponent, potentialBoxLevel) * 1000000000;
    if (player.lifetimeCoins >= nextCoinGoal) {
        potentialBoxLevel++;
    }
};
function grantDoubloons() {
    player.doubloons += potentialBoxLevel - player.boxLevel;
    player.boxLevel = potentialBoxLevel;
};



const upDiameter = 50;
function placeAscUpgrades() {
    let unlockedCount = 0;
    upRadius = upDiameter / 2;
    let display = ``;
    for (var a=0; a<ascUpgradeData.length; a++) {

        // Opacity
            let upOpacity = 0.0;
            if (player.ascUpgrade[a] === true) {
                upOpacity = 1.0;
                unlockedCount++;
            }
            else if (ascUpgradeData[a].requirement.upgrade === "None") {upOpacity = 0.5;}
            else if (player.ascUpgrade[ascUpgradeData[a].requirement.upgrade] === true) {upOpacity = 0.5;}

        // Set location
            let upPos = {
                x: 300 + ascUpgradeData[a].location.x - upRadius,
                y: 300 + ascUpgradeData[a].location.y - upRadius
            };
            // Make it disappear if needed
                let hiddenText = ``;
                if (upOpacity === 0.0) {hiddenText = ` hidden`;}
            display += `<div class='asc-upgrade-node' style='left:${upPos.x}px; bottom:${upPos.y}px; opacity:${upOpacity}; background-image: url("images/ascension/icon/${ascUpgradeData[a].icon}.png")' onclick='purchaseAscUpgrade(${a});' onmouseenter='hoverAscUpgrade(${a});' onmouseleave='ascHoverTextClear();'${hiddenText}></div>`;

    }
    // Add decorative boxes
        display += `<img src='images/ascension/the_box.png' class='decorative-box' style='left:70px; bottom:200px; rotate:20deg;'>
            <img src='images/ascension/the_box.png' class='decorative-box' style='left:430px; bottom:130px; rotate:-40deg; scale:1.6;'>
            <img src='images/ascension/the_box.png' class='decorative-box' style='left:150px; bottom:480px; rotate:10deg; scale:0.8;'>`;
    $('#right-box-dim-cell').html(display);
    if (unlockedCount === ascUpgradeData.length) {earnAscAchievement(8);}
};
function purchaseAscUpgrade(num) {
    if (player.ascUpgrade[num] === true) {return;}
    if (player.doubloons >= ascUpgradeData[num].cost) {
        playSound('Purchase');
        player.doubloons -= ascUpgradeData[num].cost;
        player.ascUpgrade[num] = true;
        $('#doubloon-box-spot').html(`Doubloons: ${player.doubloons} ${emojiInsert('doubloon')}`);
        placeAscUpgrades();
    }
};



function returnToGame() {

    // Reset Player Data
        player.ascensions++;
        player.coins = 0;
        player.ascensionCoins = 0;
        player.building = [];
        for (var a=0; a<buildingData.length; a++) {
            player.building.push({
                owned: 0, currentCost: buildingData[a].baseCost, coinsPer: 0
            });
            updateBuilding(a);
        }
        player.upgrade = [];
        for (a=0; a<upgradeData.length; a++) {
            player.upgrade.push(false);
        }
        player.puffle = [];
        player.equippedPuffle = -1;
        player.meatPuffle = -2;
        for (var a=0; a<puffleData.length; a++) {
            player.puffle.push(false);
        }

    // Starting Upgrades
        for (a=0; a<player.ascUpgrade.length; a++) {
            if (player.ascUpgrade[a] === true) {
                switch (ascUpgradeData[a].effect.type) {
                    case "Quickstart":
                        switch (ascUpgradeData[a].effect.tier) {
                            case 1:
                                player.building[0].owned = 10;
                                break;
                            case 2:
                                player.building[0].owned = 15;
                                player.building[1].owned = 5;
                                break;
                            case 3:
                                player.building[0].owned = 15;
                                player.building[1].owned = 10;
                                player.building[2].owned = 5;
                                break;
                        }
                        updateBuilding(0);
                        updateBuilding(1);
                        updateBuilding(2);
                        break;
                }
            }
        }

    // Clean up
        updateMath();
        loadRightPage('minigame');
        loadMiddlePage('how-to-play');
        setupPuffleBoxes();
        displayPuffle();
        resetSound('BG Music - Box');
        playSound('Click Coin');
        currentMascot.cooldown = 1200; // 2 Minutes

    // Get us back
        saveGame();
        $('#box-dim-table').fadeOut(0);
        setTimeout(function(){
            startGameLoop();
            $('#main-table').fadeIn(3000);
            gameStarted = true;
            playSound('BG Music');
        },2000);

};



let pufflePets = 0;
function petPuffle() {
    if (player.ascUpgrade[14] === false) {return;}
    pufflePets++;
    playSound('Pet Puffle');

    $('#puffle-display-spot img').removeClass('petPuffleClass');
    updateDisplay();
    $('#puffle-display-spot img').addClass('petPuffleClass');

};