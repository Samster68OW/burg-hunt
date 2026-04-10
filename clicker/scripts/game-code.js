// Game Code



let player = {
    coins: 0,
    coinsPerClick: 1,
    cpts: 0,
    building: [],
    upgrade: []
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

    // Generate building display
        let display = `<table>`;
        for (var b=0; b<player.building.length; b++) {
            display += `<tr><td id='building-${b}-spot' onclick='purchaseBuilding(${b});' onmouseenter='hoverTextMinigame(${b})' onmouseleave='hoverTextClear();' hidden></td></tr>`;
        }
        display += `</table>`;
        $('#minigame-page').html(display);
    
    // Generate upgrade display
        display = `<table>`;
        for (var b=0; b<player.upgrade.length; b++) {
            display += `<tr><td id='upgrade-${b}-spot' onclick='purchaseUpgrade(${b});' onmouseenter='hoverTextUpgrade(${b})' onmouseleave='hoverTextClear();' hidden><b>${upgradeData[b].name}</b></td></tr>`;
        }
        display += `</table>`;
        $('#upgrade-page').html(display);

    startGameLoop();

};



function startGameLoop() {
    setInterval(function(){

        // Gain coins from buildings
            player.coins += player.cpts;

        // Update display
            updateDisplay();

    },100);
};



function clickCoin() {

    player.coins += player.coinsPerClick;
    updateDisplay();

};



function purchaseBuilding(num) {

    // Check price
        if (player.coins >= player.building[num].currentCost) {
            player.coins -= player.building[num].currentCost;
            player.building[num].owned++;
            player.building[num].currentCost = Math.floor(player.building[num].currentCost * 1.2);
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
            if (player.upgrade[a] === true && upgradeData[a]) {

            }
        }

    // Sum the building CPTS
        for (var a=0; a<player.building.length; a++) {
            player.cpts += player.building[a].coinsPer;
        }

    updateDisplay();

};
function updateDisplay() {

    // Update Left Cell
        $('#coin-display').html(`${disNum(player.coins)} Coins`);
        if (player.cpts < 100) {
            $('#cps-display').html(`per second: ${player.cpts * 10}`);
        }
        else {
            $('#cps-display').html(`per second: ${disNum(player.cpts * 10)}`);
        }
        

    // Update Building List
        for (var a=0; a<player.building.length; a++) {
            $(`#building-${a}-spot`).html(`<b>${buildingData[a].name}</b> - Hired ${player.building[a].owned}<br>${disNum(player.building[a].currentCost)} ${emojiInsert('coin')}`);
            // Unlocked
                if (a === 0) {$(`#building-${a}-spot`).fadeIn(0);}
                else if (player.building[a-1].owned > 0) {$(`#building-${a}-spot`).fadeIn(0);}
                else {$(`#building-${a}-spot`).fadeOut(0);}
            // Can afford
                if (player.coins >= player.building[a].currentCost) {
                    $(`#building-${a}-spot`).css("opacity", "1.0");
                }
                else {
                    $(`#building-${a}-spot`).css("opacity", "0.6");
                }
        }

    // Update Upgrade List
        for (a=0; a<player.upgrade.length; a++) {
            if (checkUpReq(a) === true) {
                if (player.upgrade[a] === false) {$(`#upgrade-${a}-spot`).fadeIn(0);}
                else {$(`#upgrade-${a}-spot`).fadeOut(0);}
            }
        }

};
function checkUpReq(upID) {
    let upgradeReq = upgradeData[upID].requirement;
    switch (upgradeReq.type) {
        case 'Building':
            if (player.building[upgradeReq.building].owned >= upgradeReq.own) {return true;}
            else {return false;}
            break;
    }
    return false;
};



const numNames = [``,` thousand`, ` million`, ` billion`, ` trillion`, ` quadrillion`];
function disNum(input) {

    // Fix input
        input = Math.round(input);
    
    // Setup number
        let loop = 0;
        while (input >= 1000) {
            input = input / 1000;
            loop++;
        }
        input = Math.round(input * 100) / 100;
    
    return `${input}${numNames[loop]}`;

};