// Display Code



function updateDisplay() {

    // Burg Image
        if (player.achievement[24] === true) {
            $('#burg-img').css('background-image',`url("images/site/burg_cool.png")`);
        }

    // Update Left Cell
        $('#coin-display').html(`${disNum(Math.floor(player.coins))} coins`);
        $('#cps-display').html(`per second: ${disNum(player.cpts * 10)} ${emojiInsert('coin')}`);
        $('#coins-click-display').html(`per click: ${disNum(Math.floor(player.coinsPerClick))} ${emojiInsert('coin')}`);

        // Boosts
            let CPSBoost = false;
            let clickBoost = false;
            if (player.equippedPuffle === 0) {clickBoost = true;}
            if (puffleStat.green.timeLeftOnAbility > 0) {
                if (puffleStat.green.currentAbility === 'CPS') {CPSBoost = true;}
                else if (puffleStat.green.currentAbility === 'Clicks') {clickBoost = true;}
            }
            if (player.equippedPuffle === 5) {CPSBoost = true;}
            // Results
            if (CPSBoost === true) {$('#cps-display').css('color','#19b025');}
            else {$('#cps-display').css('color','white');}
            if (clickBoost === true) {$('#coins-click-display').css('color','#19b025');}
            else {$('#coins-click-display').css('color','white');}

    // Update Puffle Info
        switch (player.equippedPuffle) {
            case -1:
                $('#puffle-info-spot').html(``);
                break;
            case 0:
                let disBoost = Math.floor((puffleStat.blueMult - 1) * 10000) / 100;
                $('#puffle-info-spot').html(`<b>Blue Puffle</b><br>Click Boost: +${disBoost}%`);
                break;
            case 1:
                $('#puffle-info-spot').html(`<b>Pink Puffle</b><br>Coin return active!`);
                break;
            case 2:
                let timeUntilActivate = disTime(puffleStat.green.countdown);
                $('#puffle-info-spot').html(`<b>Green Puffle</b><br>Time until boost: ${timeUntilActivate}<br>Current Boost: ${puffleStat.green.currentAbility}`);
                break;
            case 3:
                $('#puffle-info-spot').html(`<b>Black Puffle</b><br>Busy clicking the coin.`);
                break;
            case 4:
                let timeUntilActivate2 = disTime(puffleStat.purple.countdown);
                let minigameName = 'None';
                if (puffleStat.purple.currentMinigame !== 'None') {
                    minigameName = buildingData[puffleStat.purple.currentMinigame].name
                }
                $('#puffle-info-spot').html(`<b>Purple Puffle</b><br>Time until boost: ${timeUntilActivate2}<br>Boosting: ${minigameName}`);
                break;
            case 5:
                let cpsBoostDis = Math.floor((puffleStat.redMult - 1) * 100);
                $('#puffle-info-spot').html(`<b>Red Puffle</b><br>CPS Boost: +${cpsBoostDis}%`);
                break;
        }

    // Update Statistics Page
        // Calculate Time Played
            let timeDisplay = disTime(player.timePlayed);
        let display =  `
            <div class='middle-header'>How to Play</div><br>
            Burg needs our help! We need to raise coins to repair the Migrator after it hit an iceberg. Click the large coin on the left to collect coins. Then reinvest those coins into hiring penguins to play minigames for you. Good luck!
            <br><br>
            <div class='middle-header'>Statistics</div><br>
            Lifetime Coins Earned: ${disNum(player.lifetimeCoins)} ${emojiInsert('coin')}<br>
            Time Played: ${timeDisplay}<br>
            Coin Clicks: ${disNum(player.coinClicks)} ${emojiInsert('tap')}<br>
        `;
        if (player.building[3].owned > 0) {
            if (player.equippedPuffle === -1) {
                display += `Equipped Puffle: None`;
            }
            if (player.equippedPuffle >= 0) {
                display += `Equipped Puffle: ${puffleData[player.equippedPuffle].name} ${emojiInsert(puffleData[player.equippedPuffle].emoji)}`;
            }
        }
        $('#statistics-page').html(display);
    
    // Update Right Side Tabs
        // Unlock Upgrades by buying Bean Counters
            if (player.building[1].owned > 0) {$('#upgrade-tab').fadeIn(0);}
            else {$('#upgrade-tab').fadeOut(0);}
        // Unlock Puffles by buying Puffle Roundup
            if (player.building[3].owned > 0) {$('#puffle-tab').fadeIn(0);}
            else {$('#puffle-tab').fadeOut(0);}

    // Update Building List
        for (var a=0; a<player.building.length; a++) {
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
            if (player.upgrade[a] === true) {
                $(`#purchased-upgrade-${a}-spot`).fadeIn(0);
            }
        }

    // Update Puffle List
        for (a=0; a<player.puffle.length; a++) {
            // Not purchased
                if (player.puffle[a] === false) {
                    if (player.coins >= puffleData[a].cost) {
                        $(`#puffle-${a}`).css("opacity", "1.0");
                    }
                    else {
                        $(`#puffle-${a}`).css("opacity", "0.6");
                    }
                }
            // Is Purchased
                else if (player.puffle[a] === true) {
                    $(`#puffle-${a}`).css("opacity", "1.0");
                    $(`#puffle-${a}`).html(`${emojiInsert(puffleData[a].emoji)} <b>${puffleData[a].name}</b> - Key: ${puffleData[a].key}`);
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
function updateBuilding(a) {

    // Pink Puffle
        let costColor = 'white';
        if (player.equippedPuffle === 1) {
            costColor = '#19b025';
        }
    
    // Purple Puffle
        let nameColor = 'white';
        if (puffleStat.purple.currentMinigame === a) {
            nameColor = '#19b025';
        }

    let display = `
        <table>
            <tr>
                <td style='width:55px;'><img src='images/minigame/minigame${a}.png' height=${buildingData[a].img.hei} width=${buildingData[a].img.wid}></td>
                <td style='text-align:left; vertical-align:top; width:130px;'>
                    <b style='color:${nameColor}'>${buildingData[a].name}</b><br>
                    <span style='color:${costColor}'>Cost: ${disNum(player.building[a].currentCost)} ${emojiInsert('coin')}</span>
                </td>
                <td style='font-size:30px; text-align:right; width:50px;'>${player.building[a].owned}</td>
            </tr>
        </table>
    `;
    $(`#building-${a}-spot`).html(display);
}



function achievementDisplay() {

    // Count achievements
        let achCount = 0;
        for (var b=0; b<player.achievement.length; b++) {
            if (player.achievement[b] === true) {achCount++;}
        }
    let achDisplay = `<div class='middle-header'>Achievements: ${achCount} of ${player.achievement.length}</div><br><table id='ach-table'><tr><td>`;
    for (var a=0; a<achievementData.length; a++) {
        if (a === 13) {achDisplay += `</td><td>`;}
        if (player.achievement[a] === true) {
            achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:rgb(133, 233, 133)'>${achievementData[a].name}</span><br>`;
        }
        else {
            achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:gray;'>????????</span><br>`;
        }
    }
    achDisplay += `</td></tr></table>`;
    $('#achievements-page').html(achDisplay);

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
        let display = `${emojiInsert(upgradeData[num].emoji)} <b>${upgradeData[num].name} [Upgrade]</b><br>
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
function hoverTextPuffle(num) {

    // Display
        let display = `${emojiInsert(puffleData[num].emoji)} <b>${puffleData[num].name} [${puffleData[num].key}] [Puffle]</b><br>
            <br>
            ${puffleData[num].desc}<br>
            <br>
            <span class='flavorText'>${puffleData[num].flavorText}</span>`;
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};
function hoverTextClear() {
    $('#hover-spot').html('');
    $('#hover-spot').css('opacity', '0.0');
};



const numNames = [``,` thousand`, ` million`, ` billion`, ` trillion`, ` quadrillion`];
function disNum(input) {

    if (input < 10 && input > 0) {
        input = Math.round(input * 100) / 100;
        return `${input}`;
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
function disTime(input) {

    let timeLeft = input;
    let hours = Math.floor(timeLeft / 36000);
    timeLeft -= hours * 36000;
    let minutes = Math.floor(timeLeft / 600);
    timeLeft -= minutes * 600;
    let seconds = Math.floor(timeLeft / 10);

    let timeDisplay = ``;
    if (hours > 0) {timeDisplay = `${hours}hr ${minutes}m ${seconds}s`;}
    else if (minutes > 0) {timeDisplay = `${minutes}m ${seconds}s`;}
    else {timeDisplay = `${seconds}s`;}
    return timeDisplay;

};



function emojiInsert(input) {
    return `<img height=10 src='images/emoji/${input}.png'>`;
};