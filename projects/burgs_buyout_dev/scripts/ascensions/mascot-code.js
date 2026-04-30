// Mascot Code



const mascotData = [
    {name: "Rockhopper", desc: "x67 Coin Boost!", img: "rockhopper_online"},
    {name: "Gary", desc: "50% Coin Return!", img: "gary_online", mult: 0.50},
    {name: "Aunt Arctic", desc: "x1111 Clicks!", img: "aunt_arctic_online", mult: 1111}
];



let currentMascot = {
    cooldown: 3000, // 5 Minutes
    mascotID: -1,
    ticksRemaining: 0
};
function checkMascot() {
    if (player.ascUpgrade[11] === true) {currentMascot.cooldown--;}
    if (currentMascot.cooldown <= 0) {
        startMascotEvent();
        currentMascot.cooldown = 3000; // 5 Minutes
    }
};



function startMascotEvent() {
    playSound('Puffle Boost');
    currentMascot = {
        mascotID: Math.floor(Math.random()*mascotData.length),
        ticksRemaining: 150 // 15 Seconds
    };
    $('#mascot-sit-spot').html(mascotData[currentMascot.mascotID].desc);
    $('#mascot-sit-spot').css('background-image', `url('images/mascot/${mascotData[currentMascot.mascotID].img}.png')`);
    updateMath();
};