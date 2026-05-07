// Hover Code



function hoverTextMinigame(num) {

    // Calculate Percentage
        let unmodifiedCPS = 0;
        for (var a=0; a<player.building.length; a++) {
            unmodifiedCPS += player.building[a].coinsPer;
        }
        let CpsPercentage = Math.floor(player.building[num].coinsPer / unmodifiedCPS * 100);
        if (player.building[num].coinsPer === 0) {CpsPercentage = 0;}

    // Display
        let display = `<b>${buildingData[num].name} [Minigame]</b><br>
            <br>
            Your ${player.building[num].owned} penguin(s) are generating ${disNum(player.building[num].coinsPer * 10)} CPS.<br>
            (${CpsPercentage}% of minigame CPS)<br>
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
function hoverAscUpgradeMain(num) {

    // Display
        let display = `${emojiInsert('box')} <b>${ascUpgradeData[num].name} [Asc Upgrade]</b><br>
            <br>
            ${ascUpgradeData[num].desc}<br>
            <br>
            <span class='flavorText'>${ascUpgradeData[num].flavorText}</span>`;
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
function hoverTextAscAchievement(num) {

    // Display
        let display = ``;
        if (player.ascAchievement[num] === true) {
            display = `<b>${ascAchievementData[num].name}</b><br>
            <br>
            ${ascAchievementData[num].desc}<br>
            <br>
            <span class='flavorText'>${ascAchievementData[num].flavorText}</span>`;
        }
        else {
            display = `<b>????????</b><br>
            <br>
            ${ascAchievementData[num].desc}<br>
            <br>
            <span class='flavorText'>????????</span>`;
        }
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};



function hoverTextPuffle(num) {

    // Display
        let display = `${emojiInsert(puffleData[num].emoji)} <b>${puffleData[num].name}</b><br>
            <br>
            ${puffleData[num].desc}<br>
            <br>
            <span class='flavorText'>${puffleData[num].flavorText}</span>`;
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};



function hoverTextBox() {
    let display = ``;

    if (player.ascensions === 0) {
        display = `${emojiInsert('box')} The Cardboard Box<br>
        <br>
        Note: Opening the box might have <u>unforeseen consequences</u>.
        <br><br>
        <span class='flavorText'>This box is for looking, not opening.</span>`;
    }
    else {
        display = `${emojiInsert('box')} The Cardboard Box<br>
        <br>
        Earning coins fills your doubloon meter. Every time you fill the meter, one doubloon is added under the box. Open the box to obtain the awaiting doubloons.
        <br><br>
        <span class='flavorText'>Each doubloon takes more coins to earn than the previous one!</span>`;
    }

    $('#hover-spot').html(display);
    $('#hover-spot').css('opacity', '1.0');

};



function hoverTextClear() {
    $('#hover-spot').html('');
    $('#hover-spot').css('opacity', '0.0');
};



// Ascension Update
function hoverAscUpgrade(num) {

    // Display
        let display = `<b>${ascUpgradeData[num].name} [Asc Upgrade]</b><br>`;
        if (player.ascUpgrade[num] === false) {display += `Cost: ${ascUpgradeData[num].cost} ${emojiInsert('doubloon')}`;}
        else if (player.ascUpgrade[num] === true) {display += `<span style="color:yellow;">Purchased!</span>`;}
        display += `<br><br>
            ${ascUpgradeData[num].desc}<br>
            <br>
            <span class='flavorText'>${ascUpgradeData[num].flavorText}</span>`;
        $('#asc-hover-spot').html(display);
        $('#asc-hover-spot').fadeIn(0);

};
function hoverRespec(num) {

    // Display
        let display = `<b>Gary's Respec Ability</b><br>
        <span style="color:yellow;">Free!</span>`;
        display += `<br><br>
            Bought the wrong upgrades? Can't get anymore doubloons? Gary can help! This button resets your ascended upgrades and returns your doubloons at no cost.<br>
            <br>
            <span class='flavorText'>It took Gary a lot of effort to manipulate the Outer Box Dimension. Props to him!</span>`;
        $('#asc-hover-spot').html(display);
        $('#asc-hover-spot').fadeIn(0);

};
function ascHoverTextClear() {
    $('#asc-hover-spot').html('');
    $('#asc-hover-spot').fadeOut(0);
};