// Math Hunt Style



function loadMathItems() {
    currentHunt.activity = 'searching';
    currentHunt.currentProgress = [];
    const itemsPerRow = 2;
    $('.hunt-header').html(`Help find the answer by filling out the fields below!`);
    // Generate item field
        let display = ``;
        for (var a=0; a<currentHunt.itemList.length; a++) {
            if (a % itemsPerRow === 0) {
                display += `<div class="row">`;
            }
            // This item
                currentHunt.currentProgress.push(false);
                display += `<div class="col-md-6" style='height:120px;'>
                    <span style='font-size:18px; font-weight:bold;'>${currentHunt.itemList[a].flavorText}</span><br>
                    <span style='font-size:18px;'>${currentHunt.itemList[a].item}</span><br>
                    <span id="item-drop-${a}-spot">NUMBER GOES HERE</span>
                    </div>`;
            if (a % itemsPerRow === itemsPerRow - 1) {
                display += `</div>`;
            }
        }
        display += ``;
        $('#math-list-spot').html(display);
    $('#submit-button-3').html('Submit Answers');
};



function checkMathAnswers() {
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
                            $(`#item-drop-${a}-spot`).html(`<span class="glyphicon glyphicon-ok"></span> ${currentHunt.itemList[a].location}`);
                            $(`#item-drop-${a}-spot`).addClass('lead');
                            $(`#item-drop-${a}-spot`).addClass('correctAnswerClass');
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
    $('#math-output-spot').html(`Result: ${mar2026Math()}`);
};



// The Custom Code
function mar2026Math() {
    let result = 0;
    return result
};