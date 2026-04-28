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
        let display = `${emojiInsert(puffleData[num].emoji)} <b>${puffleData[num].name}</b><br>
            <br>
            ${puffleData[num].desc}<br>
            <br>
            <span class='flavorText'>${puffleData[num].flavorText}</span>`;
        $('#hover-spot').html(display);
        $('#hover-spot').css('opacity', '1.0');

};



function hoverTextBox() {

    // Display
        let display = `${emojiInsert('box')} The Cardboard Box<br>
            <br>
            Note: Opening the box might have <u>unforeseen consequences</u>.
            <br><br>
            <span class='flavorText'>This box is for looking, not opening.</span>`;
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
        let display = `<b>${ascUpgradeData[num].name} [Asc Upgrade]</b><br>
            Cost: ${ascUpgradeData[num].cost} ${emojiInsert('doubloon')}<br>
            <br>
            ${ascUpgradeData[num].desc}<br>
            <br>
            <span class='flavorText'>${ascUpgradeData[num].flavorText}</span>`;
        $('#asc-hover-spot').html(display);
        $('#asc-hover-spot').fadeIn(0);

};
function ascHoverTextClear() {
    $('#asc-hover-spot').html('');
    $('#asc-hover-spot').fadeOut(0);
};