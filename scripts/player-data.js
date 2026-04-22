// Player Data Manager



let player = {
    postcardData: '',
    deviceType: ''
};



function loadPlayerData() {
    // Device Type
        player.deviceType = 'desktop';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            player.deviceType = 'mobile';
        }
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
            if (player.postcardData[a] === 'T') {
                display += `<p class="lead">${postcardList[a].title}</p>
                    <img src="images/postcard/${postcardList[a].imgSource}" class="img-responsive img-postcard" style="width:600px;" alt="Postcard">
                    <br>
                    <div class='postcard-desc-spot img-responsive'>${postcardList[a].postcardDesc}<br>(Postcard courtesy of ${postcardList[a].postcardCredit}.)</div>
                    <br><br><br><br>`;
            }
            else if (postcardList[a].showLocked === true) {
                display += `<p class="lead">??????????</p>
                    <div class='img-responsive locked-postcards'><div>${postcardList[a].unlockDesc}</div></div>
                    <br>
                    <div class='postcard-desc-spot img-responsive'>(Postcard courtesy of ${postcardList[a].postcardCredit}.)</div>
                    <br><br><br><br>`;
            }
        }
    // Show postcards
        $('#postcard-display-spot').html(display);
};