// Ascending



function clickBox() {
    if (confirm("Are you sure you would like to open the box?") === false) {return;}

    // Stop everything and load the animation
        clearInterval(gameLoop);
        loadPage('box-open-animation');
        if (playMusic === true) {toggleMusic();}
        gameStarted = false;
        $('#doubloon-box-spot').html(`Doubloons: ${disNum(100)} ${emojiInsert('doubloon')}`);
    
    // Play shrinking animation
        setTimeout(function() {
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


    // Get us back
        //saveGame();
        $('#box-dim-table').fadeOut(0);
        setTimeout(function(){
            startGameLoop();
            $('#main-table').fadeIn(3000);
        },2000);

};



// Doubloons are collected every square numbered-trillion. The first doubloon is at 1T, then 4T, 9T, 16T, etc.