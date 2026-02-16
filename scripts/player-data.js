// Player Data Manager



let player = {
    postcardData: ''
};



function loadPlayerData() {
    // Postcard Data
        if (localStorage.getItem('postcardData') !== null) {
            player.postcardData = localStorage.getItem('postcardData');
        }
        if (player.postcardData.length < postcardList.length) {
            for (var a=player.postcardData.length-1; a<postcardList.length-1; a++) {
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
        for (var a=postcardList.length-1; a>-1; a--) {
            if (player.postcardData[a] === 'T' | postcardList[a].alwaysSeen === true) {
                display += `<p class="lead">${postcardList[a].title}</p>`;
                display += `<img src="images/postcard/${postcardList[a].imgSource}" class="img-responsive img-postcard" style="width:600px;" alt="Postcard"><br>`;
                display += `(Postcard courtesy of ${postcardList[a].postcardCredit}.)<br><br><br>`;
            }
        }
    // Show postcards
        $('#postcard-display-spot').html(display);
};