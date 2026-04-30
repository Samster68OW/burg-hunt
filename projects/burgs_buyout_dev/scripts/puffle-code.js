// Puffle Code



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