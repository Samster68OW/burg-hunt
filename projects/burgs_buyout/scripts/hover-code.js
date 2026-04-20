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



function hoverTextClear() {
    $('#hover-spot').html('');
    $('#hover-spot').css('opacity', '0.0');
};