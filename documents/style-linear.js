// Linear Hunt Style



function loadNextItem() {
    currentHunt.activity = 'searching';
    let currentNum = currentHunt.currentItem + 1;
    $('.hunt-header').html(`Item #${currentNum}: Where can you find this item?`);
    $('#current-item').html(`${currentHunt.itemList[currentHunt.currentItem].item}`);
    $('#item-img-spot').html(`<img src="images/item/unknown.png" alt="?" class="img-rounded img-savior">`);
    $('#room-dropdown-spot').html(generateDropdown(0));
    $('#submit-button-0').html('Submit Answer');
};



function checkLinearAnswer() {
    if (currentHunt.activity === 'searching') {
        // Get answer
            var e = document.getElementById("room-dropdown-0");
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
                $('.hunt-header').html(display);
                $('#item-img-spot').html(`<img src="images/item/${currentHunt.imgSource}/item_${currentHunt.itemList[currentHunt.currentItem].itemID}.png" alt="${currentHunt.itemList[currentHunt.currentItem].item}" class="img-rounded img-savior">`);
                $('#room-dropdown-spot').html(`<p class="lead">${currentHunt.itemList[currentHunt.currentItem].location}</p>`);
                if (currentHunt.currentItem === currentHunt.itemList.length - 1) {
                    $('#submit-button-0').html('Finish Hunt');
                    currentHunt.activity = 'complete';
                }
                else {
                    $('#submit-button-0').html('Next Item');
                    currentHunt.activity = 'found';
                }
            }
        // If incorrect
            else if (answerCorrect === false) {
                $('#room-dropdown-0').css('background-color','red');
                setTimeout(function(){
                    $('#room-dropdown-0').css('background-color','white');
                },100);
            }
    }
    else if (currentHunt.activity === 'found') {
        currentHunt.currentItem++;
        loadNextItem();
    }
    else if (currentHunt.activity === 'complete') {
        completeHunt();
    }
};