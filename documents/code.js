// Code



let currentHunt;



function startHunt(huntID) {
    // Load item data
        switch (huntID) {
            case 'jan2026Event':
                currentHunt = jan2026Event;
                break;
        }
    // Load Page
        for (var b=0; b<currentHunt.itemList.length; b++) {
            currentHunt.itemList[b].itemID = b;
        }
        shuffle(currentHunt.itemList);
        $('#hunt-title').html(currentHunt.title);
        currentHunt.currentItem = 0;
        loadPage('hunt');
        loadNextItem();
};
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
};



function loadNextItem() {
    currentHunt.activity = 'searching';
    let currentNum = currentHunt.currentItem + 1;
    $('#hunt-header').html(`Item #${currentNum}: Where can you find this item?`);
    $('#current-item').html(`${currentHunt.itemList[currentHunt.currentItem].item}`);
    $('#item-img-spot').html(`<img src="images/item/unknown.png" alt="?" class="img-rounded img-savior">`);
    $('#submit-button').html('Submit Answer');
    generateDropdown();
};
function generateDropdown() {
    let display = `<center><select class="form-control" id="room-dropdown">`;
    display += `<option selected>Select Room</option>`;
    for (var a=0; a<currentHunt.roomList.length; a++) {
        display += `<option>${currentHunt.roomList[a]}</option>`;
    }
    display += `</select></center><br><br>`;
    $('#room-dropdown-spot').html(display);
};



function submitAnswer() {
    if (currentHunt.activity === 'searching') {
        // Get answer
            var e = document.getElementById("room-dropdown");
            var value = e.value;
            var text = e.options[e.selectedIndex].text;
            let answerCorrect = false;
            if (text === currentHunt.itemList[currentHunt.currentItem].location) {
                answerCorrect = true;
            }
        // If correct
            if (answerCorrect === true) {
                let currentPercent = currentHunt.currentItem + 1;
                currentPercent = currentPercent / currentHunt.itemList.length * 100;
                let display = `<div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: ${currentPercent}%;">
                        <span>Correct!</span>
                    </div>
                </div>`;
                $('#hunt-header').html(display);
                $('#item-img-spot').html(`<img src="images/item/${currentHunt.imgSource}/item_${currentHunt.itemList[currentHunt.currentItem].itemID}.png" alt="${currentHunt.itemList[currentHunt.currentItem].item}" class="img-rounded img-savior">`);
                $('#room-dropdown-spot').html(`<p class="lead">${currentHunt.itemList[currentHunt.currentItem].location}</p>`);
                if (currentHunt.currentItem === currentHunt.itemList.length - 1) {
                    $('#submit-button').html('Finish Hunt');
                    currentHunt.activity = 'complete';
                }
                else {
                    $('#submit-button').html('Next Item');
                currentHunt.activity = 'found';
                }
            }
        // If incorrect
            else if (answerCorrect === false) {
                $('#room-dropdown').css('background-color','red');
                setTimeout(function(){
                    $('#room-dropdown').css('background-color','white');
                },100);
            }
    }
    else if (currentHunt.activity === 'found') {
        currentHunt.currentItem++;
        loadNextItem();
    }
    else if (currentHunt.activity === 'complete') {
        $('#postcard-spot').html(`<img src="images/item/${currentHunt.imgSource}/postcard.png" class="img-responsive img-savior" style="width:600px;" alt="Postcard">`);
        loadPage('winScreen');
    }
};