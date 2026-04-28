// Ascending



function clickBox() {
    if (confirm("Are you sure you would like to open the box?") === false) {return;}

    // Stop everything and load the animation
        clearInterval(gameLoop);
        loadPage('box-open-animation');
        if (playMusic === true) {toggleMusic();}
        resetSound('BG Music');
        playSound('Box Opened');
        gameStarted = false;
    
    // Load the Box Dimension
        grantDoubloons();
        player.doubloons = 100;
        $('#doubloon-box-spot').html(`Doubloons: ${player.doubloons} ${emojiInsert('doubloon')}`);
        placeAscUpgrades();
    
    // Play shrinking animation
        setTimeout(function() {
            playSound('Box Shrink');
            $('#void-box').removeClass('boxShrinkClass');
            updateDisplay();
            $('#void-box').addClass('boxShrinkClass');
        },2000);
        setTimeout(function() {
            $('#box-open-animation').fadeOut(0);
        },5000);
        setTimeout(function() {
            $('#box-dim-table').fadeIn(2000);
        },7000);

};
function grantDoubloons() {
    // TODO
};



const upDiameter = 50;
function placeAscUpgrades() {
    upRadius = upDiameter / 2;
    let display = ``;
    for (var a=0; a<ascUpgradeData.length; a++) {

        // Opacity
            let upOpacity = 0.0;
            if (player.ascUpgrade[a] === true) {upOpacity = 1.0;}
            else if (ascUpgradeData[a].requirement.upgrade === "None") {upOpacity = 0.3;}
            else if (player.ascUpgrade[ascUpgradeData[a].requirement.upgrade] === true) {upOpacity = 0.5;}

        // Set location
            let upPos = {
                x: 300 + ascUpgradeData[a].location.x - upRadius,
                y: 300 + ascUpgradeData[a].location.y - upRadius
            };
            display += `<div class='asc-upgrade-node' style='left:${upPos.x}px; bottom:${upPos.y}px; opacity:${upOpacity}; background-image: url("images/ascension/icon/${ascUpgradeData[a].icon}.png")' onclick='purchaseAscUpgrade(${a});' onmouseenter='hoverAscUpgrade(${a});' onmouseleave='ascHoverTextClear();'></div>`;

    }
    $('#right-box-dim-cell').html(display);
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
        for (var a=0; a<puffleData.length; a++) {
            player.puffle.push(false);
        }
        updateMath();
        loadRightPage('minigame');
        loadMiddlePage('how-to-play');
        displayPuffle();
        playSound('Click Coin');


    // Get us back
        //saveGame();
        $('#box-dim-table').fadeOut(0);
        setTimeout(function(){
            startGameLoop();
            $('#main-table').fadeIn(3000);
        },2000);

};