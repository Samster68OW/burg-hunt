// Iceberg Code



function generateIcebergPage() {
        $('#iceberg-content-box').fadeIn(0);
        $('#iceberg-content-box').removeClass('shakyIcebergClass');
    // Count Achievements
        let achCount = 0;
        for (var b=0; b<player.achievement.length; b++) {
            if (player.achievement[b] === true) {achCount++;}
        }
        for (var b=0; b<player.ascAchievement.length; b++) {
            if (player.ascAchievement[b] === true) {achCount++;}
        }
    // Display
        if (achCount >= 34) {$('#iceberg-current-progress').html(`<span style='color:yellow;'>Penguins: ${achCount}</span>`);}
        else {$('#iceberg-current-progress').html(`Penguins: ${achCount}`);}
    // Place Penguins
        let display = ``;
        for (var a=0; a<achCount; a++) {
            let leftSpace = Math.random()*350;
            let bottomSpace = Math.random()*200;
            let tilt = Math.floor(Math.random()*40) - 20;
            display += `<img src='images/iceberg/penguin.png' class='iceberg-penguin' style='left:${leftSpace}px; bottom:${bottomSpace}px; rotate: ${tilt}deg;'>`;
        }
        $('#iceberg-penguin-space').html(display);
        
};
function attemptToTipIceberg() {
    // Count Achievements
        let achCount = 0;
        for (var b=0; b<player.achievement.length; b++) {
            if (player.achievement[b] === true) {achCount++;}
        }
        for (var b=0; b<player.ascAchievement.length; b++) {
            if (player.ascAchievement[b] === true) {achCount++;}
        }
    // What next?
        if (achCount >= 34 | player.debug === true) {successfullyTipIceberg();}
        else {
            playSound('Click Coin');
            $('#iceberg-content-box').removeClass('shakyIcebergClass');
            updateDisplay();
            $('#iceberg-content-box').addClass('shakyIcebergClass');
        }

};



function successfullyTipIceberg() {
    // Time Played
        if (player.icebergCompleteTime === false) {
            player.icebergCompleteTime = player.timePlayed;
        }
    $('#iceberg-content-box').fadeOut(0);
    $('#iceberg-flipped-page').css('background-image', `none`);
    clearInterval(gameLoop);
    resetSound('BG Music');
    playSound('Ship Bought');
    gameStarted = false;
    setTimeout(function(){
        playSound('Ice Cracking');
        $('#iceberg-page').addClass('shakyIcebergInfClass');
    },1000);
    setTimeout(function(){
        $('#iceberg-page').fadeOut(0);
        $('#iceberg-page').removeClass('shakyIcebergInfClass');
    },5000);
    setTimeout(function(){
        endingSequence();
    },8000);

};
function endingSequence() {
    $('#clickable-paper').fadeOut(0);
    $('#iceberg-flipped-page').fadeIn(2000);
    playSound('BG Music - Ending Sequence');
    setTimeout(function(){
        $('#lore-line1').fadeIn(1000);
    },3000);
    setTimeout(function(){
        $('#lore-line2').fadeIn(1000);
    },6000);
    setTimeout(function(){
        $('#lore-line3').fadeIn(1000);
    },9000);
    setTimeout(function(){
        $('#lore-line4').fadeIn(1000);
    },12000);
    setTimeout(function(){
        $('#lore-line5').fadeIn(1000);
    },15000);
    setTimeout(function(){
        $('#lore-line6').fadeIn(1000);
    },19000);
};
function loadTippedIceberg() {
    $('#iceberg-flipped-page').css('background-image', `none`);
    playSound('Click Coin');
    $('#lore-line6').fadeOut(0);
    $('#iceberg-flipped-page').fadeOut(3000);
    resetSound('BG Music - Ending Sequence');
    setTimeout(function() {
        $('#lore-line1').fadeOut(0);
        $('#lore-line2').fadeOut(0);
        $('#lore-line3').fadeOut(0);
        $('#lore-line4').fadeOut(0);
        $('#lore-line5').fadeOut(0);
        $('#iceberg-flipped-page').css('background-image', `url('images/iceberg/beach_night.png')`);
        $('#iceberg-flipped-page').css('background-size', `100% 100%`);
        playSound('BG Music - Sea Waves');
        $('#clickable-paper').fadeIn(0);
    },4000);
    setTimeout(function() {
        $('#iceberg-flipped-page').fadeIn(0);
    },6000);
};



function clickOnPaper() {
    playSound("Paper Ruffle");
    $('#big-paper').fadeIn(1000);
    setTimeout(function() {
        $('#ending-line').fadeIn(1000);
    },3000);
    setTimeout(function() {
        $('#return-from-ending-button').fadeIn(1000);
    },6000);
};
function clickReturnButton() {
    // Stop everything
        resetSound('BG Music - Sea Waves');
        playSound('Click Coin');
        $('#big-paper').fadeOut(0);
        $('#iceberg-flipped-page').fadeOut(0);
        $('#ending-line').fadeOut(0);
        $('#return-from-ending-button').fadeOut(0);

    // Clean up
        updateMath();
        loadRightPage('minigame');
        loadMiddlePage('how-to-play');
        displayPuffle();
        currentMascot.cooldown = 1200; // 2 Minutes

    // Get us back
        setTimeout(function(){
            earnAscAchievement(9);
            startGameLoop();
            $('#main-table').fadeIn(3000);
            gameStarted = true;
            playSound('BG Music');
            saveGame();
        },2000);
};