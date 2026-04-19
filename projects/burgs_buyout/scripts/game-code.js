// Game Code



function startGame() {

    $('#burg-img').css('background-image',`url("images/site/burg_normal.png")`);
    
    // Generate Player Data
        for (var a=0; a<buildingData.length; a++) {
            player.building.push({
                owned: 0, currentCost: buildingData[a].baseCost, coinsPer: 0
            });
        }
        for (a=0; a<upgradeData.length; a++) {
            player.upgrade.push(false);
        }
        for (var a=0; a<achievementData.length; a++) {
            player.achievement.push(false);
        }

    // Generate building display
        let display = `<div class='middle-header'>Minigames</div><br><table>`;
        for (var b=0; b<player.building.length; b++) {
            display += `<tr><td id='building-${b}-spot' onclick='purchaseBuilding(${b});' onmouseenter='hoverTextMinigame(${b})' onmouseleave='hoverTextClear();' hidden>
                <table>
                    <tr>
                        <td style='width:55px;'><img src='images/minigame/minigame${b}.png' height=${buildingData[b].img.hei} width=${buildingData[b].img.wid}></td>
                        <td style='text-align:left; vertical-align:top; width:130px;'>
                            <b>${buildingData[b].name}</b><br>
                            Cost: ${disNum(player.building[b].currentCost)} ${emojiInsert('coin')}
                        </td>
                        <td style='font-size:30px; text-align:right; width:50px;'>${player.building[b].owned}</td>
                    </tr>
                </table>
            </td></tr>`;
        }
        display += `</table>`;
        $('#minigame-page').html(display);
    
    // Generate upgrade display
        display = `<div id='upgrade-table'>`;
        for (var b=0; b<player.upgrade.length; b++) {
            display += `<div id='upgrade-${b}-spot' class='upgrade-cell' onclick='purchaseUpgrade(${b});' onmouseenter='hoverTextUpgrade(${b})' onmouseleave='hoverTextClear();' hidden>${emojiInsert(upgradeData[b].emoji)} <b>${upgradeData[b].name}</b> - ${disNum(upgradeData[b].cost)} ${emojiInsert('coin')}</div>`;
        }
        display += `</div>`;
        $('#new-upgrade-list').html(display);
    // Generate Purchased Upgrades
        display = ``;
        for (var b=0; b<player.upgrade.length; b++) {
            display += `<div id='purchased-upgrade-${b}-spot' class='upgrade-cell' onmouseenter='hoverTextUpgrade(${b})' onmouseleave='hoverTextClear();' hidden>${emojiInsert(upgradeData[b].emoji)} <b>${upgradeData[b].name}</b></div>`;
        }
        $('#owned-upgrade-list').html(display);

    // Puffle Display
        display = `<div class='middle-header'>Puffles</div><br><table>`;
        for (var c=0; c<puffleData.length; c++) {
            display += `<tr><td id='puffle-${c}-spot' onclick='purchasePuffle(${c});' onmouseenter='hoverTextPuffle(${c})' onmouseleave='hoverTextClear();' class='puffle-cell'>
                <table>
                    <tr>
                        <td style='width:55px;'><img src='images/puffle/${puffleData[c].emoji}.png' height=40px width=45px></td>
                        <td style='text-align:left; vertical-align:top; width:130px;' id='puffle-${c}'>
                            <b>${puffleData[c].name}</b><br>
                            Cost: ${disNum(puffleData[c].cost)} ${emojiInsert('coin')}
                        </td>
                        <td style='font-size:30px; text-align:right; width:80px;' id='puffle-${c}-equip' class='puffle-equip'></td>
                    </tr>
                </table>
            </td></tr>`;
            player.puffle.push(false);
        }
        display += `</table><br><br>Puffles grant passive effects. When you purchase a Puffle, it is automatically equipped. You may only have one Puffle equipped at a time. You may freely switch between Puffles using the number keys on your keyboard.`;
        $('#puffle-page').html(display);

    // Generate Achievement Display
        achievementDisplay();

    loadGame();
    startGameLoop();

};



let gameLoop;
function startGameLoop() {
    gameLoop = setInterval(function(){

        // Gain coins from buildings
            player.coins += (player.cpts * player.cptsMult);
            player.coins = Math.floor(player.coins * 100) / 100;
            player.lifetimeCoins += (player.cpts * player.cptsMult);
            player.lifetimeCoins = Math.floor(player.lifetimeCoins * 100) / 100;

        // Progress Time
            player.timePlayed++;
            if (player.timePlayed % 300 === 0) {saveGame();}

        // Update display
            checkAchievements();
            greenPuffle();
            blackPuffle();
            purplePuffle();
            updateDisplay();

    },100);
};



let musicStarted = false;
function clickCoin(user) {

    // Sounds
        if (user === 'player') {
            playSound('Click Coin');
            if (musicStarted === false) {
                musicStarted = true;
                playSound('BG Music');
            }
        }

    // Click
        player.coinClicks++;
        player.lifetimeCoins += player.coinsPerClick;
        player.coins += player.coinsPerClick;
    
    // Update Blue & Red Puffle
        // This doesn't matter for calculations, but for the boost display.
        puffleStat.blue.mult = player.coinClicks / puffleStat.blue.divisor;
        if (puffleStat.blue.mult > puffleStat.blue.multMax) {puffleStat.blue.mult = puffleStat.blue.multMax;}
        puffleStat.blue.mult += 1;

    // Coin Animation
        $('#clickable-coin').removeClass('coinPulseClass');
        updateDisplay();
        $('#clickable-coin').addClass('coinPulseClass');

};



function purchaseBuilding(num) {

    // Check price
        if (player.coins >= player.building[num].currentCost) {
            playSound('Purchase');
            player.coins -= player.building[num].currentCost;
            // Pink Puffle
                if (player.equippedPuffle === 1) {player.coins += player.building[num].currentCost * puffleStat.pink.mult;}
            player.building[num].owned++;
            player.building[num].currentCost = Math.floor(player.building[num].currentCost * 1.1);
            updateMath();
            hoverTextMinigame(num);
            updateBuilding(num);
        }

};
function purchaseUpgrade(num) {

    // Check price
        if (player.coins >= upgradeData[num].cost) {
            if (num === 26) {playSound('Ship Bought');}
            else {playSound('Purchase');}
            
            player.coins -= upgradeData[num].cost;
            // Pink Puffle
                if (player.equippedPuffle === 1) {player.coins += upgradeData[num].cost * puffleStat.pink.mult;}
            player.upgrade[num] = true;
            updateMath();
            hoverTextClear();
        }

};
function purchasePuffle(num) {

    if (player.puffle[num] === true) {
        swapPuffle(num);
        return;
    }

    // Check price
        if (player.coins >= puffleData[num].cost) {
            playSound('Purchase');
            player.coins -= puffleData[num].cost;
            player.puffle[num] = true;
            swapPuffle(num);
            updateMath();
            hoverTextClear();
        }

};



function updateMath() {

    // Reset CPTS
        player.cpts = 0;
        player.cptsMult = 1;
        player.coinsPerClick = 1;

    // Update building numbers
        for (var a=0; a<player.building.length; a++) {
            player.building[a].coinsPer = player.building[a].owned * buildingData[a].baseCoinsPerSec;
        }
    
    // Check the upgrades
        for (a=0; a<player.upgrade.length; a++) {
            if (player.upgrade[a] === true) {
                switch (upgradeData[a].effect.type) {
                    case "Click-Set":
                        player.coinsPerClick = upgradeData[a].effect.clickAmount;
                        break;
                    case "Building-Mult":
                        player.building[upgradeData[a].effect.building].coinsPer *= upgradeData[a].effect.mult;
                        break;
                    case "Click-Building":
                        player.coinsPerClick = player.building[upgradeData[a].effect.building].coinsPer * 10;
                        break;
                    case "CPS-Multiplier":
                        player.cptsMult *= upgradeData[a].effect.mult;
                        break;
                }
            }
        }

    // Purple Puffle
        if (puffleStat.purple.timeLeftOnMinigame > 0) {
            player.building[puffleStat.purple.currentMinigame].coinsPer *= puffleStat.purple.mult;
        }

    // Sum the building CPTS
        for (var a=0; a<player.building.length; a++) {
            player.cpts += player.building[a].coinsPer;
        }
    
    // Red Puffle
        if (player.equippedPuffle === 5) {
            let achCount = 0;
            for (var b=0; b<player.achievement.length; b++) {
                if (player.achievement[b] === true) {achCount++;}
            }
            puffleStat.red.mult = 1 + (achCount * puffleStat.red.percent);
            player.cpts *= puffleStat.red.mult;
        }
    
    // Green Puffle
        if (puffleStat.green.timeLeftOnAbility > 0) {
            if (puffleStat.green.currentAbility === 'CPS') {
                player.cpts *= puffleStat.green.mult;
            }
            else if (puffleStat.green.currentAbility === 'Clicks') {
                player.coinsPerClick *= puffleStat.green.mult;
            }
        }
    
    // Blue Puffle
        if (player.equippedPuffle === 0) {
            puffleStat.blue.mult = player.coinClicks / puffleStat.blue.divisor;
            if (puffleStat.blue.mult > puffleStat.blue.multMax) {puffleStat.blue.mult = puffleStat.blue.multMax;}
            puffleStat.blue.mult += 1;
            player.coinsPerClick *= puffleStat.blue.mult;
        }
        

    // Clean up CPTS
        player.cpts = Math.floor(player.cpts * 100) / 100;

    updateDisplay();

};



function checkAchievements() {

    for (var a=0; a<player.achievement.length; a++) {
        if (player.achievement[a] === false) {
            currAchCri = achievementData[a].criteria;
            switch (achievementData[a].criteria.type) {
                case 'Coins-Lifetime':
                    if (player.lifetimeCoins >= currAchCri.amount) {
                        earnAchievement(a);
                    }
                    break;
                case 'Building-Amount':
                    if (player.building[currAchCri.building].owned >= currAchCri.amount) {
                        earnAchievement(a);
                    }
                    break;
                case 'Upgrade-Purchased':
                    if (player.upgrade[currAchCri.upgrade] === true) {
                        earnAchievement(a);
                    }
                    break;
                case 'Puffles-Purchased':
                    let purchasedAll = true;
                    for (var b=0; b<puffleData.length; b++) {
                        if (player.puffle[b] === false) {purchasedAll = false;}
                    }
                    if (purchasedAll === true) {
                        earnAchievement(a);
                    }
                    break;
            }
        }
    }

};
function earnAchievement(num) {

    // Sounds
        playSound('Achievement');

    // Earn Acheivement
        player.achievement[num] = true;

    // Display
        $('#achievement-dropdown').removeClass('dropdownClass');
        $('#current-ach-name').html(`${achievementData[num].name}`);
        setTimeout(function(){
            $('#achievement-dropdown').addClass('dropdownClass');
        },10);
        achievementDisplay();
    
    // Red Puffle
        let achCount = 0;
        for (var b=0; b<player.achievement.length; b++) {
            if (player.achievement[b] === true) {achCount++;}
        }
        puffleStat.red.mult = 1 + (achCount * puffleStat.red.percent);

};



function keyboardInput(key) {
    switch (key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            swapPuffle(Number(key - 1));
            break;
    };
};
function swapPuffle(num) {

    // Swap Puffle
        if (num === player.equippedPuffle) {
            player.equippedPuffle = -1;
        }
        else {
            if (player.puffle[num] === true) {
                player.equippedPuffle = num;
            }
        }
        updateMath();
        displayPuffle();
        for (var c=0; c<player.building.length; c++) {
            updateBuilding(c);
        }
    
};
function displayPuffle() {
    if (player.equippedPuffle === -1) {
        $('#puffle-display-spot').html(``);
        $('.puffle-equip').html('');
    }
    else {
        $('#puffle-display-spot').html(`<img src='images/puffle/${puffleData[player.equippedPuffle].emoji}.png' onmouseenter='hoverTextPuffle(${player.equippedPuffle})' onmouseleave='hoverTextClear();'>`);
        $('.puffle-equip').html('');
        $(`#puffle-${player.equippedPuffle}-equip`).html('<img src="images/site/checkmark.png">');
    }
};
function greenPuffle() {

    // Reduce current ability's countdown
        if (puffleStat.green.timeLeftOnAbility > 0) {
            puffleStat.green.timeLeftOnAbility--;
            if (puffleStat.green.timeLeftOnAbility === 0) {
                puffleStat.green.currentAbility = 'None';
                updateMath();
            }
        }
        if (puffleStat.green.timeLeftOnAbility === 0) {
            puffleStat.green.currentAbility = 'None';
        }

    // Check for Green Puffle's countdown
        if (puffleStat.green.countdown > 0 && player.equippedPuffle === 2) {
            puffleStat.green.countdown--;
            if (puffleStat.green.countdown <= 0) {
                puffleStat.green.countdown = puffleStat.green.countdownMax;
                puffleStat.green.timeLeftOnAbility = puffleStat.green.timeLeftMax;

                // Select ability
                    switch (Math.floor(Math.random()*2)) {
                        case 0:
                            puffleStat.green.currentAbility = 'CPS';
                            break;
                        case 1:
                            puffleStat.green.currentAbility = 'Clicks';
                            break;
                    }
                    playSound('Puffle Boost');
                    updateMath();

            }
        }

};
function purplePuffle() {

    // Reduce current ability's countdown
        if (puffleStat.purple.timeLeftOnMinigame > 0) {
            puffleStat.purple.timeLeftOnMinigame--;
            if (puffleStat.purple.timeLeftOnMinigame === 0) {
                puffleStat.purple.currentMinigame = 'None';
                updateMath();
            }
        }
        if (puffleStat.purple.timeLeftOnMinigame === 0) {
            puffleStat.purple.currentMinigame = 'None';
        }

    // Check for Purple Puffle's countdown
        if (puffleStat.purple.countdown > 0 && player.equippedPuffle === 4) {
            puffleStat.purple.countdown--;
            if (puffleStat.purple.countdown <= 0) {
                puffleStat.purple.countdown = puffleStat.purple.countdownMax;
                puffleStat.purple.timeLeftOnMinigame = puffleStat.purple.timeLeftMax;

                // Select ability
                    let buildList = [];
                    for (var a=0; a<player.building.length; a++) {
                        if (player.building[a].owned > 0) {
                            buildList.push(a);
                        }
                    }
                    puffleStat.purple.currentMinigame = buildList[Math.floor(Math.random()*buildList.length)];
                    playSound('Puffle Boost');
                    updateMath();
                    updateBuilding(puffleStat.purple.currentMinigame);

            }
        }

};
function blackPuffle() {

    if (player.equippedPuffle === 3) {
        if (player.timePlayed % 5 === 0) {clickCoin('puffle');}
    }

};