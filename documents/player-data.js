// Player Data Manager



let player = {
    postcardData: ''
};



function loadPlayerData() {
    // Postcard Data
        if (localStorage.getItem('postcardData') !== null) {
            player.postcardData = localStorage.getItem('postcardData');
        }
        if (player.postcardData.length < huntList.length) {
            for (var a=player.postcardData.length-1; a<huntList.length-1; a++) {
                player.postcardData = `${player.postcardData}F`;
            }
            savePlayerData();
        }
};



function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}
function savePlayerData() {
    // Postcard Data
        localStorage.setItem('postcardData', player.postcardData);
};



function displayPostcards() {
    // TODO
};