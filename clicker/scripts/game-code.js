// Game Code



let player = {
    coins: 0,
    building: []
};



function startGame() {
    
    // Generate Building Data
        for (var a=0; a<buildingData.length; a++) {
            player.building.push({
                owned: 0, currentCost: buildingData[a].baseCost, coinsPer: 0
            });
        }

    // Generate building display
        let display = `<table>`;
        for (var b=0; b<player.building.length; b++) {
            display += `<tr><td id='building-${b}-spot' onclick='purchaseBuilding(${b});'></td></tr>`;
        }
        display += `</table>`;
        $('#building-list-display').html(display);

    startGameLoop();

};



function startGameLoop() {
    setInterval(function(){

        // Gain coins from buildings
            for (var a=0; a<player.building.length; a++) {
                player.coins += player.building[a].coinsPer;
            }

        // Update display
            updateDisplay();

    },100);
};



function clickCoin() {

    player.coins++;
    updateDisplay();

};



function purchaseBuilding(num) {

    // Check price
        if (player.coins >= player.building[num].currentCost) {
            player.coins -= player.building[num].currentCost;
            player.building[num].owned++;
            player.building[num].currentCost = Math.floor(player.building[num].currentCost * 1.2);
            updateMath();
        }

};



function updateMath() {

    // Update building numbers
        for (var a=0; a<player.building.length; a++) {
            player.building[a].coinsPer = player.building[a].owned * buildingData[a].baseCoinsPerSec;
        }

    updateDisplay();

};
function updateDisplay() {

    // Update Player Stats
        player.coins = Math.round(player.coins * 100) / 100;
        let displayCoins = Math.round(player.coins);
        $('#coin-display').html(`Coins: ${displayCoins}`);

    // Update Building List
        for (var a=0; a<player.building.length; a++) {
            $(`#building-${a}-spot`).html(`<b>${buildingData[a].name}</b> - Owned ${player.building[a].owned}<br>$${player.building[a].currentCost}`);
        }

};