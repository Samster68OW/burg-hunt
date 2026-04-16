// Penguin Sound Engine by Half a Man Games
// Created: August 4, 2022
// Updated: April 15, 2026
// Version: 0.2.0



const sourceFolder = 'sounds/';
const masterVolume = 1.0;



const soundData = [
    {name:'Click Coin', src:'click_coin.wav', vol:0.2},
    {name:'Purchase', src:'purchase.wav', vol:0.4},
    {name:'Achievement', src:'achievement.wav', vol:0.5},
    {name:'Green Boost', src:'green_boost.wav', vol:0.2},
];



// Playing the sounds
let soundList = [];
function playSound(soundFile) {
    let n = soundList.length;
    let ch = findSound(soundFile);
    soundList[n] = new Audio(sourceFolder + soundData[ch].src);
    soundList[n].play();
    soundList[n].volume = soundData[ch].vol * masterVolume;
    //soundList[n].onend = 
    //media.src = ""; // Clear the source
    //media.removeAttribute('src'); // Explicitly remove attribute
    //media.load(); // Forces the browser to unload the media
    
}
function findSound(soundFile) {
    for (var a=0; a<soundData.length; a++) {
        if (soundFile === soundData[a].name) {return a; break;}
    }
}