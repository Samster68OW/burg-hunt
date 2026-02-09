// Hunt Loader



let currentHunt;



function startHunt(huntID) {
    // Load item data
        currentHunt = huntList[huntID];
        currentHunt.huntID = huntID;
        for (var b=0; b<currentHunt.itemList.length; b++) {
            currentHunt.itemList[b].itemID = b;
        }
        if (currentHunt.randomize === true) {
            shuffle(currentHunt.itemList);
        }
        $('.hunt-title').html(currentHunt.title);
        currentHunt.currentItem = 0;
    // Hunt Styles
        $('#hunt-container-linear').fadeOut(0);
        $('#hunt-container-free').fadeOut(0);
        $(`#hunt-container-${currentHunt.style}`).fadeIn(0);
    // Load Page
        loadHuntContent();
        loadPage('hunt');
};



// Hunt Styles
function loadHuntContent() {
    switch (currentHunt.style) {
        case 'linear': loadNextItem();
            break;
        case 'free': loadFreeItems();
            break;
    }
};
function submitAnswer() {
    switch (currentHunt.style) {
        case 'linear': checkLinearAnswer();
            break;
        case 'free': checkFreeAnswers();
            break;
    }
};



// Universal Functions
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
};
function generateDropdown(dropdownID) {
    let display = `<center><select class="form-control room-dropdown" id="room-dropdown-${dropdownID.toString()}">`;
    display += `<option selected>Select Room</option>`;
    for (var a=0; a<currentHunt.roomList.length; a++) {
        display += `<option>${currentHunt.roomList[a]}</option>`;
    }
    display += `</select></center><br><br>`;
    return display;
};



// Hunt Complete!
function completeHunt() {
    $('#courtesy-spot').html(`(Postcard courtesy of ${currentHunt.postcardCredit}.)`);
    $('#postcard-spot').html(`<img src="images/item/${currentHunt.imgSource}/postcard.png" class="img-responsive img-postcard" style="width:600px;" alt="Postcard">`);
    loadPage('winScreen');
    player.postcardData = replaceChar(player.postcardData, 'T', currentHunt.huntID);
    savePlayerData();
};