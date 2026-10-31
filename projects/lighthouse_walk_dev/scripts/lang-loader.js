// Language Loader



const langList = [eng];



function setLanguage(i) {
    
    // Interface
        $('#main-menu-title').html(langList[i].interface.mainMenu[0]);
        $('#main-menu-flavor').html(langList[i].interface.mainMenu[1]);
        $('#start-game-button').html(langList[i].interface.mainMenu[2]);
        $('#start-bonus-game-button').html(langList[i].interface.mainMenu[3]);
        $('#the-end-title').html(langList[i].interface.endScreen[0]);
        $('#the-end-title-two-text').html(langList[i].interface.endScreen[1]);

    // Level Dialogue
        for (var j=0; j<levelData.length; j++) {
            levelData[j].dialogue = langList[i].levelDialogue[j];
        }

    // Colors
        diaColors = langList[i].colors;

};