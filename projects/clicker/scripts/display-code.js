// Display Code



function updateDisplay() {

    // Update Left Cell
        $('#coin-display').html(`${disNum(player.coins)} coins`);
        $('#cps-display').html(`per second: ${disNum(player.cpts * 10)} ${emojiInsert('coin')}`);
        $('#coins-click-display').html(`per click: ${disNum(player.coinsPerClick)} ${emojiInsert('coin')}`);

    // Update Statistics Page
        let display =  `
            <div id='middle-header'>Statistics</div><br>
            Lifetime Coins Earned: ${disNum(player.lifetimeCoins)} ${emojiInsert('coin')}<br>
            Coins Clicked: ${disNum(player.coinClicks)}
        `;
        $('#statistics-page').html(display);

    // Update Achievements Page
        // Count achievements
            let achCount = 0;
            for (var b=0; b<player.achievement.length; b++) {
                if (player.achievement[b] === true) {achCount++;}
            }
        let achDisplay = `<div id='middle-header'>Achievements: ${achCount} of ${player.achievement.length}</div><br>`;
        for (var a=0; a<achievementData.length; a++) {
            if (player.achievement[a] === true) {
                achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:rgb(133, 233, 133)'>${achievementData[a].name}</span><br>`;
            }
            else {
                achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:gray;'>????????</span><br>`;
            }
            
        }
        $('#achievements-page').html(achDisplay);
    
    // Update Right Side Tabs
        // Unlock Upgrades by buying Bean Counters
            if (player.building[1].owned > 0) {$('#upgrade-tab').fadeIn(0);}
            else {$('#upgrade-tab').fadeOut(0);}
        // Unlock Puffles by buying Puffle Roundup
            if (player.building[3].owned > 0) {$('#puffle-tab').fadeIn(0);}
            else {$('#puffle-tab').fadeOut(0);}

    // Update Building List
        for (var a=0; a<player.building.length; a++) {
            // Building Cell
                let display = `
                    <table>
                        <tr>
                            <td style='width:55px;'><img src='images/minigame/minigame${a}.png' height=${buildingData[a].img.hei} width=${buildingData[a].img.wid}></td>
                            <td style='text-align:left; vertical-align:top; width:130px;'>
                                <b>${buildingData[a].name}</b><br>
                                Cost: ${disNum(player.building[a].currentCost)} ${emojiInsert('coin')}
                            </td>
                            <td style='font-size:30px; text-align:right; width:50px;'>${player.building[a].owned}</td>
                        </tr>
                    </table>
                `;
                $(`#building-${a}-spot`).html(display);
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
            if (checkUpReq(a) === true | player.debug === true) {
                if (player.upgrade[a] === false) {$(`#upgrade-${a}-spot`).fadeIn(0);}
                else {$(`#upgrade-${a}-spot`).fadeOut(0);}
                if (player.coins >= upgradeData[a].cost) {
                    $(`#upgrade-${a}-spot`).css("opacity", "1.0");
                }
                else {
                    $(`#upgrade-${a}-spot`).css("opacity", "0.6");
                }
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
        case 'Coin-Clicks':
            if (player.coinClicks >= upgradeReq.amount) {return true;}
            else {return false;}
            break;
    }
    return false;
};



function hoverTextMinigame(num) {

    // Calculate Percentage
        let CpsPercentage = Math.floor(player.building[num].coinsPer / player.cpts * 100);
        if (player.building[num].coinsPer === 0) {CpsPercentage = 0;}

    // Display
        let display = `<b>${buildingData[num].name} [Minigame]</b><br>
            <br>
            Your ${player.building[num].owned} penguin(s) are generating ${disNum(player.building[num].coinsPer * 10)} CPS.<br>
            (${CpsPercentage}% of total CPS)<br>
            <br>
            <span class='flavorText'>${buildingData[num].flavorText}</span>`;
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};
function hoverTextUpgrade(num) {

    // Display
        let display = `<b>${upgradeData[num].name} [Upgrade]</b><br>
            <br>
            ${upgradeData[num].desc}<br>
            <br>
            <span class='flavorText'>${upgradeData[num].flavorText}</span>`;
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};
function hoverTextAchievement(num) {

    // Display
        let display = ``;
        if (player.achievement[num] === true) {
            display = `<b>${achievementData[num].name}</b><br>
            <br>
            ${achievementData[num].desc}<br>
            <br>
            <span class='flavorText'>${achievementData[num].flavorText}</span>`;
        }
        else {
            display = `<b>????????</b><br>
            <br>
            ${achievementData[num].desc}<br>
            <br>
            <span class='flavorText'>????????</span>`;
        }
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};
function hoverTextClear() {
    $('#hover-spot').html('');
    $('#hover-spot').css('opacity', '0.0');
};



const numNames = [``,` thousand`, ` million`, ` billion`, ` trillion`, ` quadrillion`];
function disNum(input) {

    if (input < 1 && input > 0) {
        return `<1`
    }

    // Fix input
        input = Math.round(input);
    
    if (input < 10000) {
        return `${input}`;
    }
    
    // Setup number
        let loop = 0;
        while (input >= 1000) {
            input = input / 1000;
            loop++;
        }
        input = Math.round(input * 100) / 100;
    
    return `${input}${numNames[loop]}`;

};



function emojiInsert(input) {
    return `<img height=10 src='images/emoji/${input}.png'>`;
};