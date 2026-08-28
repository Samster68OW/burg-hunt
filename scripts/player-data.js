// Player Data Manager



let player = {
    postcardData: '',
    deviceType: '',
    profileData: {}
};



function loadPlayerData() {
    // Device Type
        player.deviceType = 'desktop';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) player.deviceType = 'mobile';
    // Postcard Data
        if (localStorage.getItem('postcardData') !== null) player.postcardData = localStorage.getItem('postcardData');
        if (player.postcardData.length < postcardList.length) {
            for (var a=player.postcardData.length-1; a<postcardList.length-1; a++) {
                player.postcardData = `${player.postcardData}F`;
            }
            savePlayerData();
        }
    // Profile Data
        if (localStorage.getItem('profileData') !== null) player.profileData = localStorage.getItem('profileData');
        if (player.profileData == null) player.profileData = {};
        player.profileData = JSON.parse(player.profileData);
        if (player.profileData.name == null) player.profileData.name = 'Pnum'; savePlayerData();
        if (player.profileData.stamps == null) player.profileData.stamps = "0"; savePlayerData();
        if (player.profileData.pins == null) player.profileData.pins = "0"; savePlayerData();
        if (player.profileData.coins == null) player.profileData.coins = "0"; savePlayerData();
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
        localStorage.setItem('profileData', JSON.stringify(player.profileData));
};