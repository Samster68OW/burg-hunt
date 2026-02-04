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
    // Generate display
        let display = ``;
        for (var a=huntList.length-1; a>-1; a--) {
            if (player.postcardData[a] === 'T') {
                display += `<p class="lead">${huntList[a].title}</p>`;
                display += `<img src="images/item/${huntList[a].imgSource}/postcard.png" class="img-responsive img-postcard" style="width:600px;" alt="Postcard"><br>`;
                display += `(Postcard courtesy of ${huntList[a].postcardCredit}.)<br><br><br>`;
            }
        }
    // Show postcards
        $('#postcard-display-spot').html(display);
};