// The Truth Engine
// by Samuel Britnell
// Version: 1.0.1
// Created: January 20th, 2021
// Updated: March 1st, 2021



// Implementation:
// 1) Paste this in your head: <script type='text/javascript' src='truth_engine.js'></script>
// 2) Run loadSounds() in your code to make sure each sound has been loaded onto the page before use after the user interaction.
// 3) Call any functions in the 'Main Functions' section.



// Control Panel:
var sourceFolder = 'sounds/'; // Location of your audio files. (Leave blank if in same directory.)
var masterVolume = 0.8; // Can be anywhere from 0 to 1.



// Sound Panel:
// name: A custom name you can use to activate the sound.
// src: The actual file name of the sound.
// vol: The volume your sound will be played at. Can be anywhere from 0 to 1.
// mode: Can be 'default' or 'loop'.
var soundData = [
    // Bread
        {name:'BG Music', src:'paris.mp3', vol:0.1, mode:'loop'},
        {name:'Achievement', src:'Pickup_GemBells14.wav', vol:0.2, mode:'play'},
        {name:'Click Coin', src:'click_coin.wav', vol:0.3, mode:'play'},
        {name:'Puffle Boost', src:'puffle_boost.wav', vol:0.1, mode:'play'},
        {name:'Purchase', src:'purchase.wav', vol:0.3, mode:'play'},
        {name:'Ship Bought', src:'ship_bought.wav', vol:0.3, mode:'play'},
        {name:'Box Opened', src:'box_opened.wav', vol:0.3, mode:'play'},
        {name:'Box Shrink', src:'box_shrink.wav', vol:0.1, mode:'play'},
];



// Main Functions
// These functions receive the 'soundfile' variable. This can be a number or a string.
// number: You can input the array index of the sound in the 'Sound Panel' above.
// string: You can input the sound's name or source.



// Play Sound: Plays the sound.
function playSound(soundFile) {
    if (soundsLoaded === false) {loadSounds();}
    var channel = findSound(soundFile);
    soundChannel[channel].play();
    soundChannel[channel].volume = soundData[channel].vol * masterVolume;
    soundChannel[channel].onended = function() {
        soundChannel[channel].currentTime = 0;
        if (soundData[channel].mode === "loop") {playSound(soundFile);}
    };
}
// Pause Sound: Pauses the sound right where it is.
function pauseSound(soundFile) {
    if (soundsLoaded === false) {return;}
    soundChannel[findSound(soundFile)].pause();
}
// Restart Sound: Sets the sound back to its beginning.
function restartSound(soundFile) {
    if (soundsLoaded === false) {return;}
    soundChannel[findSound(soundFile)].currentTime = 0;
}
// Reset Sound: Pauses the sound and sets it back to its beginning.
function resetSound(soundFile) {
    if (soundsLoaded === false) {return;}
    pauseSound(soundFile);
    restartSound(soundFile);
}
// Set Volume: Change the volume mid-execution
function setVolume(soundFile,newVolume) {
    if (soundsLoaded === false) {return;}
    var channel = findSound(soundFile);
    soundChannel[channel].pause();
    soundChannel[channel].volume = newVolume * masterVolume;
    soundChannel[channel].play();
}



// Do not use these functions: (except loadSounds();)
var soundChannel = [];
function findSound(soundFile) {
    if (typeof soundFile === "number") {return soundFile;}
    else {
        for (var a=0; a<soundData.length; a++) {
            if (soundFile === soundData[a].name | soundFile === soundData[a].src) {return a;break;}
        }
    }
}
var soundsLoaded = false;
function loadSounds() {
    if (soundsLoaded === false) {
        soundsLoaded = true;
        for (var a=0; a<soundData.length; a++) {loadSound(a);}
    }
}
function loadSound(channel) {
    var currentSound = new Audio(sourceFolder + soundData[channel].src);
    currentSound.play();
    currentSound.volume = 0;
    soundChannel[channel] = new Audio(sourceFolder + soundData[channel].src);
    if (soundData[channel].vol === undefined) {soundData[channel].vol = 1;}
    if (soundData[channel].mode === undefined) {soundData[channel].mode = "play";}
    soundChannel[channel].volume = soundData[channel].vol * masterVolume;
}