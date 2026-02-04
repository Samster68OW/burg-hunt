// Free Hunt Style



function loadFreeItems() {
    currentHunt.activity = 'searching';
    currentHunt.currentProgress = [];
    const itemsPerRow = 3;
    $('.hunt-header').html(`Where can you find these items?`);
    // Generate item and dropdown table
        let display = ``;
        for (var a=0; a<currentHunt.itemList.length; a++) {
            if (a % itemsPerRow === 0) {
                display += `<div class="row">`;
            }
            // This item
                currentHunt.currentProgress.push(false);
                display += `<div class="col-md-4" style='height:120px;'>
                    <span style='font-size:18px;'>${currentHunt.itemList[a].item}</span><br>
                    <span id="item-drop-${a}-spot" class='lead'>${generateDropdown(a)}</span>
                    </div>`;
            if (a % itemsPerRow === itemsPerRow - 1) {
                display += `</div>`;
            }
        }
        display += ``;
        $('#free-list-spot').html(display);
    $('#submit-button-1').html('Submit Answers');
};



function checkFreeAnswers() {
    if (currentHunt.activity === 'searching') {
        for (var a=0; a<currentHunt.currentProgress.length; a++) {
            if (currentHunt.currentProgress[a] === false) {
                // Check to see if the dropdown is correct.
                    var e = document.getElementById(`room-dropdown-${a}`);
                    var value = e.value;
                    var text = e.options[e.selectedIndex].text;

                    // This item is correct.
                        if (text === currentHunt.itemList[a].location) {
                            currentHunt.currentProgress[a] = true;
                            $(`#item-drop-${a}-spot`).html(currentHunt.itemList[a].location);
                        }

                    // This item is wrong.
                        else {
                            $(`#room-dropdown-${a}`).css('background-color','red');
                        }

            }
        }
        // Check to see if the entire page is correct.
            let allCorrect = true;
            for (var b=0; b<currentHunt.currentProgress.length; b++) {
                if (currentHunt.currentProgress[b] === false) {allCorrect = false;}
            }

            // All are correct.
                if (allCorrect === true) {
                    $('.hunt-header').html(`You found them all! Well done!`);
                    $('#submit-button-1').html('Finish Hunt');
                    currentHunt.activity = 'complete';
                }
            
            // Some are wrong.
                else if (allCorrect === false) {
                    setTimeout(function(){
                        $('.room-dropdown').css('background-color','white');
                    },100);
                }

    }
    else if (currentHunt.activity === 'complete') {
        completeHunt();
    }
};