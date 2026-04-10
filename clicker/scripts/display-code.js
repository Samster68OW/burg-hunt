// Display Code



function hoverTextMinigame(num) {

    // Calculate Percentage
        let CpsPercentage = Math.floor(player.building[num].coinsPer / player.cpts * 100);
        if (player.building[num].coinsPer === 0) {CpsPercentage = 0;}

    // Display
        let display = `<b>${buildingData[num].name} [Minigame]</b><br>
            Your ${player.building[num].owned} are generating ${player.building[num].coinsPer * 10} CPS.<br>
            (${CpsPercentage}% of total CPS)<br>
            <br>
            <i>${buildingData[num].flavorText}</i>`;
        $('#hover-spot').html(display);

};
function hoverTextUpgrade(num) {

    // Display
        let display = `<b>${upgradeData[num].name} [Upgrade]</b><br>
            ${upgradeData[num].desc}<br>
            <br>
            <i>${upgradeData[num].flavorText}</i>`;
        $('#hover-spot').html(display);

};
function hoverTextClear() {
    $('#hover-spot').html('');
};



function emojiInsert(input) {
    return `<img height=10 src='images/${input}.png'>`;
};