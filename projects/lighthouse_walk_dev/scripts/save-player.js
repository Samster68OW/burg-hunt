// Player Data



let playerDataLH = {
    completedGame: 0,
    preferredLanguage: 0
};



function loadGame() {
    let dataRetrieval = localStorage.getItem('playerDataLH');
    if (dataRetrieval == null) {}
    else {playerDataLH = JSON.parse(dataRetrieval);}
    loadArea('main-menu');
};
function saveGame() {
    localStorage.setItem('playerDataLH', JSON.stringify(playerDataLH));
};
function resetData() {
    localStorage.clear('playerDataLH');
};