// Mascot Code



const mascotData = [
    {name: "Rockhopper", desc: "x67 Coin Boost!", img: "rockhopper_online"},
    {name: "Gary", desc: "50% Coin Return!", img: "gary_online", mult: 0.50},
    {name: "Aunt Arctic", desc: "x1111 Clicks!", img: "aunt_arctic_online", mult: 1111}
];



let currentMascot = {
    cooldown: 1200, // 2 Minutes
    mascotID: -1,
    ticksRemaining: 0
};
function checkMascot() {
    if (player.ascUpgrade[11] === true) {currentMascot.cooldown--;}
    if (currentMascot.cooldown <= 0) {
        startMascotEvent();
        currentMascot.cooldown = 1800; // 2 Minutes
    }
};



function startMascotEvent(num) {
    playSound('Puffle Boost');
    earnAscAchievement(5);
    if (num === undefined) {num = Math.floor(Math.random()*mascotData.length);}
    currentMascot = {
        mascotID: num,
        ticksRemaining: 200 // 20 Seconds
    };
    $('#mascot-sit-spot').html(mascotData[currentMascot.mascotID].desc);
    $('#mascot-sit-spot').css('background-image', `url('images/mascot/${mascotData[currentMascot.mascotID].img}.png')`);
    updateMath();
};