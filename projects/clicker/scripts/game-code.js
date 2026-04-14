// Game Code



let player = {
    coins: 0,
    lifetimeCoins: 0,
    coinsPerClick: 1,
    cpts: 0,
    building: [],
    upgrade: [],
    puffle: [],
    equippedPuffle: false,
    achievement: [],
    coinClicks: 0,
    debug: true
};



function startGame() {
    
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
        let display = `<table>`;
        for (var b=0; b<player.building.length; b++) {
            display += `<tr><td id='building-${b}-spot' onclick='purchaseBuilding(${b});' onmouseenter='hoverTextMinigame(${b})' onmouseleave='hoverTextClear();' hidden></td></tr>`;
        }
        display += `</table>`;
        $('#minigame-page').html(display);
    
    // Generate upgrade display
        display = `<table id='upgrade-table'>`;
        for (var b=0; b<player.upgrade.length; b++) {
            display += `<tr><td id='upgrade-${b}-spot' class='upgrade-cell' onclick='purchaseUpgrade(${b});' onmouseenter='hoverTextUpgrade(${b})' onmouseleave='hoverTextClear();' hidden><b>${upgradeData[b].name}</b> - ${disNum(upgradeData[b].cost)} ${emojiInsert('coin')}</span></td></tr>`;
        }
        display += `</table>`;
        $('#upgrade-page').html(display);

    // Puffle Display
        for (var c=0; c<puffleData.length; c++) {
            player.puffle.push(false);
        }

    startGameLoop();

};



function startGameLoop() {
    setInterval(function(){

        // Gain coins from buildings
            player.coins += player.cpts;
            player.lifetimeCoins += player.cpts;

        // Update display
            checkAchievements();
            updateDisplay();

    },100);
};



function clickCoin() {

    // Click
        player.coinClicks++;
        player.lifetimeCoins += player.coinsPerClick;
        player.coins += player.coinsPerClick;

    // Coin Animation
        $('#clickable-coin').removeClass('coinPulseClass');
        updateDisplay();
        $('#clickable-coin').addClass('coinPulseClass');

};



function purchaseBuilding(num) {

    // Check price
        if (player.coins >= player.building[num].currentCost) {
            player.coins -= player.building[num].currentCost;
            player.building[num].owned++;
            player.building[num].currentCost = Math.floor(player.building[num].currentCost * 1.1);
            updateMath();
            hoverTextMinigame(num);
        }

};
function purchaseUpgrade(num) {

    // Check price
        if (player.coins >= upgradeData[num].cost) {
            player.coins -= upgradeData[num].cost;
            player.upgrade[num] = true;
            updateMath();
            hoverTextClear();
        }

};



function updateMath() {

    // Reset CPTS
        player.cpts = 0;

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
                }
            }
        }

    // Sum the building CPTS
        for (var a=0; a<player.building.length; a++) {
            player.cpts += player.building[a].coinsPer;
        }

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
            }
        }
    }

};
function earnAchievement(num) {

    // Earn Acheivement
        player.achievement[num] = true;

    // Display
        $('#achievement-dropdown').removeClass('dropdownClass');
        $('#current-ach-name').html(`${achievementData[num].name}`);
        setTimeout(function(){
            $('#achievement-dropdown').addClass('dropdownClass');
        },10);

};