// Display Code



let shipBoughtTime = false;
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
            if (player.equippedPuffle === 0 | player.meatPuffle === 0) {clickBoost = true;}
            if (puffleStat.green.timeLeftOnAbility > 0) {
                if (puffleStat.green.currentAbility === 'CPS') {CPSBoost = true;}
                else if (puffleStat.green.currentAbility === 'Clicks') {clickBoost = true;}
            }
            if (player.equippedPuffle === 5 | player.meatPuffle === 5) {CPSBoost = true;}
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
                let disBoost = Math.floor((puffleStat.blue.mult - 1) * puffleStat.blue.divisor) / 100;
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
                let cpsBoostDis = Math.floor((puffleStat.red.mult) * 100);
                $('#puffle-info-spot').html(`<b>Red Puffle</b><br>CPS Boost: +${cpsBoostDis}%`);
                break;
        }
    
    // The Migrator
        if (player.upgrade[26] === true) {
            $('#migrator-sit-spot').fadeIn(0);
        }
        else if (player.upgrade[26] === false) {
            $('#migrator-sit-spot').fadeOut(0);
        }
    // Mascots
        if (currentMascot.ticksRemaining > 0) {
            $('#mascot-sit-spot').fadeIn(0);
        }
        else {
            $('#mascot-sit-spot').fadeOut(0);
        }
    // Sell (the player)
        if (player.ascUpgrade[13] === true) {
            $('#sell-sit-spot').fadeIn(0);
        }
        else if (player.ascUpgrade[13] === false) {
            $('#sell-sit-spot').fadeOut(0);
        }
    // The Iceberg Tab
        if (player.ascUpgrade[2] === true) {
            $('#iceberg-tab-button').fadeIn(0);
        }
        else if (player.ascUpgrade[2] === false) {
            $('#iceberg-tab-button').fadeOut(0);
        }
    // The Iceberg Icon Under Coin
        if (player.ascAchievement[9] === true) {
            $('#iceberg-sit-spot').fadeIn(0);
        }
        else if (player.ascAchievement[9] === false) {
            $('#iceberg-sit-spot').fadeOut(0);
        }

    // Update Statistics Page
        // Calculate Penguins Hired
            let penguinsHired = 0;
            for (var a=0; a<player.building.length; a++) {
                penguinsHired += player.building[a].owned;
            }
        // Calculate Time Played
            let timeDisplay = disTime(player.timePlayed);
        let display =  `
            <div class='middle-header'>Statistics</div><br>
            Lifetime Coins Earned: ${disNum(player.lifetimeCoins)} ${emojiInsert('coin')}<br>
            Time Played: ${timeDisplay}<br>
            Coin Clicks: ${disNum(player.coinClicks)} ${emojiInsert('tap')}<br>
            Penguins Hired: ${penguinsHired}<br>
            CPS Multiplier: + ${disNum((player.cptsMult - 1) * 100)}% ${emojiInsert('coin')}<br>
        `;
        if (player.fullCompleteTime !== false) {
            display += `<span style='color:yellow;'>100% Time: ${disTime(player.fullCompleteTime)}</span><br>`;
        }
        if (player.ascensions > 0) {
            display += `<br><span style='color:#f5cefc'>`;
            display += `Ascensions: ${player.ascensions}<br>`;
            display += `Box Level: ${disNum(player.boxLevel)} ${emojiInsert('box')} (+ ${disNum(player.boxLevel * 10)}% ${emojiInsert('coin')})<br>`;
            display += `Doubloons: ${disNum(player.doubloons)} ${emojiInsert('doubloon')}<br>`;
            display += `Coins this Ascension: ${disNum(player.ascensionCoins)} ${emojiInsert('coin')}<br>`;
            if (player.icebergCompleteTime !== false) {
                display += `<span style='color:yellow;'>200% Time: ${disTime(player.icebergCompleteTime)}</span><br>`;
            }
            display += `</span>`;
        }
        $('#statistics-page').html(display);
    
    // Update Gold Pile
        const minGoldHeight = 155;
        const maxGoldHeight = -10;
        const goldDiff = minGoldHeight - maxGoldHeight;
        let currPercent = logPercentage(player.ascensionCoins, 1000000000);
        let newValue = currPercent * goldDiff;
        newValue = minGoldHeight - newValue;
        $("#gold-pile").css("background-position-y", `${newValue}px`);
    
    // Update 2nd Gold Pile
        const minGoldHeightTwo = 300;
        const maxGoldHeightTwo = 0;
        const goldDiffTwo = minGoldHeightTwo - maxGoldHeightTwo;
        currPercent = logPercentage(player.ascensionCoins, 1000000000000);
        newValue = currPercent * goldDiffTwo;
        newValue = minGoldHeightTwo - newValue;
        $("#gold-pile-2").css("background-position-y", `${newValue}px`);
    
    // Update Middle Tabs
        // Unlock Achievements after unlocking the first one.
            if (player.achievement[0] === true) {$('#achievements-tab').fadeIn(0);}
            else {$('#achievements-tab').fadeOut(0);}
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
            else if (checkUpReq(a) === false) {$(`#upgrade-${a}-spot`).fadeOut(0);}
            if (player.upgrade[a] === true) {
                $(`#purchased-upgrade-${a}-spot`).fadeIn(0);
            }
            else if (player.upgrade[a] === false) {
                $(`#purchased-upgrade-${a}-spot`).fadeOut(0);
            }
        }
        if (player.upgrade[27] === false) {$('#box-list').fadeOut(0);}
        else if (player.upgrade[27] === true) {$('#box-list').fadeIn(0);}
        if (player.ascensions === 0) {$('#potential-levels-spot').fadeOut(0);}
        else if (player.ascensions >= 1) {
            
            // Calculate Progress
                let priorGoal = Math.pow(boxExponent, potentialBoxLevel-1) * 1000000000;
                let percentageDone = (player.lifetimeCoins - priorGoal) / (nextCoinGoal - priorGoal);
                percentageDone *= 100;
                if (percentageDone > 100) {percentageDone = 100;}

            let display = `
                Open the box now to earn:<br>
                ${disNum(potentialBoxLevel - player.boxLevel)} ${emojiInsert('doubloon')}<br><br>
                <div id='loading-bar-outer'>
                    <div id='loading-bar-inner' style='width:${percentageDone}%'></div>
                </div><br>
            `;
            $('#potential-levels-spot').html(display);
            $('#potential-levels-spot').fadeIn(0);
        }
    
    // Ascended Upgrades
        if (player.ascensions > 0) {$('#asc-upgrade-section').fadeIn(0);}
        else if (player.ascensions === 0) {$('#asc-upgrade-section').fadeOut(0);}
        for (a=0; a<player.ascUpgrade.length; a++) {
            if (player.ascUpgrade[a] === true) {
                $(`#purchased-ascUpgrade-${a}-spot`).fadeIn(0);
            }
            else if (player.ascUpgrade[a] === false) {
                $(`#purchased-ascUpgrade-${a}-spot`).fadeOut(0);
            }
        }

    // Update Puffle List
        for (a=0; a<player.puffle.length; a++) {
            // Not purchased
                if (player.puffle[a] === false) {
                    if (player.coins >= puffleData[a].cost) {
                        $(`#puffle-${a}-spot`).css("opacity", "1.0");
                    }
                    else {
                        $(`#puffle-${a}-spot`).css("opacity", "0.6");
                    }
                }
            // Is Purchased
                else if (player.puffle[a] === true) {
                    $(`#puffle-${a}-spot`).css("opacity", "1.0");
                    $(`#puffle-${a}`).html(`<b>${puffleData[a].name}</b><br>Press ${puffleData[a].key} to select.`);
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
        case 'Upgrade':
            if (player.upgrade[upgradeReq.upgrade] === true) {return true;}
            else {return false;}
            break;
        case 'Asc-Upgrade':
            if (player.ascUpgrade[upgradeReq.upgrade] === true) {return true;}
            else {return false;}
            break;
    }
    return false;
};
function updateBuilding(a) {

    // Pink Puffle
        let costColor = 'white';
        if (player.equippedPuffle === 1 | player.meatPuffle === 1) {
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
};
function setupPuffleBoxes() {
    for (var a=0; a<puffleData.length; a++) {
        if (a === 6) {
            if (player.ascUpgrade[15] === true) {
                if (player.meatPuffle <= -2) {player.meatPuffle = -1;}
                $('#meat-puffle-tr').fadeIn(0);
                let display = `<table>
                    <tr>
                        <td style='width:55px;'><img src='images/puffle/${puffleData[a].emoji}.png' height=40px width=45px></td>
                        <td style='text-align:left; vertical-align:top; width:130px;' id='puffle-${a}'>
                            <b>${puffleData[a].name}</b><br>
                            Cost: ${disNum(puffleData[a].cost)} ${emojiInsert('coin')}
                        </td>
                        <td style='font-size:30px; text-align:right; width:80px;' id='puffle-${a}-equip' class='puffle-equip'></td>
                    </tr>
                </table>`;
                $(`#puffle-${a}-spot`).html(display);
            }
        }
        else {
            let textStyling = '';
            if (player.meatPuffle === a) {textStyling = 'text-decoration: line-through;';}
            let display = `<table>
                <tr>
                    <td style='width:55px;'><img src='images/puffle/${puffleData[a].emoji}.png' height=40px width=45px></td>
                    <td style='text-align:left; vertical-align:top; width:130px; ${textStyling}' id='puffle-${a}'>
                        <b>${puffleData[a].name}</b><br>
                        Cost: ${disNum(puffleData[a].cost)} ${emojiInsert('coin')}
                    </td>
                    <td style='font-size:30px; text-align:right; width:80px;' id='puffle-${a}-equip' class='puffle-equip'></td>
                </tr>
            </table>`;
            $(`#puffle-${a}-spot`).html(display);
        }
        
    }
};



function achievementDisplay() {

    // Standard achievements
        let achCount = 0;
        let totalAchCount = player.achievement.length;
        for (var b=0; b<player.achievement.length; b++) {
            if (player.achievement[b] === true) {achCount++;}
        }
        if (player.ascUpgrade[1] === true) {
            totalAchCount += player.ascAchievement.length;
            for (var b=0; b<player.ascAchievement.length; b++) {
                if (player.ascAchievement[b] === true) {achCount++;}
            }
        }
        let achDisplay = `<div class='middle-header'>Achievements: ${achCount} of ${totalAchCount}</div><br><table id='ach-table'><tr><td>`;
        for (var a=0; a<achievementData.length; a++) {
            if (a === 13) {achDisplay += `</td><td>`;}
            if (player.achievement[a] === true) {
                achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:yellow;'>${achievementData[a].name}</span><br>`;
            }
            else {
                achDisplay += `<span onmouseenter='hoverTextAchievement(${a});' onmouseleave='hoverTextClear();' style='color:gray;'>????????</span><br>`;
            }
        }
        achDisplay += `</td></tr></table>`;

    // Ascended Achievements+
        if (player.ascUpgrade[1] === true) {
            achDisplay += `<table id='ach-table' style='background-color: rgba(66, 18, 98, 0.8)'><tr><td>`;
            for (var a=0; a<ascAchievementData.length; a++) {
                if (a === 5) {achDisplay += `</td><td>`;}
                if (player.ascAchievement[a] === true) {
                    achDisplay += `<span onmouseenter='hoverTextAscAchievement(${a});' onmouseleave='hoverTextClear();' style='color:yellow;'>${ascAchievementData[a].name}</span><br>`;
                }
                else {
                    achDisplay += `<span onmouseenter='hoverTextAscAchievement(${a});' onmouseleave='hoverTextClear();' style='color:gray;'>????????</span><br>`;
                }
            }
            achDisplay += `</td></tr></table>`;
        }
        else if (player.ascUpgrade[1] === false) {
            achDisplay += ``;
        }
        
    $('#achievements-page').html(achDisplay);

};



const numNames = [``,`thousand`, `million`, `billion`, `trillion`, `quadrillion`, `quintillion`, `sextillion`, `septillion`];
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
    
    if (loop >= numNames.length) {return `Too many`}
    else {return `${input} ${numNames[loop]}`;}

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
function logPercentage(value, max) {

    if (value <= 0) {return 0;}
    else if (value >= max) {return 1;}

    // Calculate logarithms base 10
    const logMin = Math.log10(1);
    const logMax = Math.log10(max);
    const logValue = Math.log10(value);

    // Normalize and convert to percentage
    const percentage = ((logValue - logMin) / (logMax - logMin));

    return percentage;
};
function emojiInsert(input) {
    return `<img height=10 src='images/emoji/${input}.png'>`;
};