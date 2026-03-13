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
                    <span style='font-size:14px; font-weight:bold;'>${currentHunt.itemList[a].flavorText}</span><br><br>
                    <span style='font-size:18px;'>#${a+1}: ${currentHunt.itemList[a].item}</span><br>
                    <span id='field-input-spot-${a}'><input type="text" class="text-input" id="number-input-${a}" placeholder="0" maxlength=3></span>
                    </div>`;
            if (a % itemsPerRow === itemsPerRow - 1) {
                display += `</div>`;
            }
        }
        display += ``;
        $('#math-list-spot').html(display);
    $('#submit-button-3').html('Submit Answers');
    $('#math-output-spot').html(`Result: 0`);
};



function checkMathAnswers() {
    if (currentHunt.activity === 'searching') {
        for (var a=0; a<currentHunt.currentProgress.length; a++) {
            if (currentHunt.currentProgress[a] === false) {
                // Check to see if the text field is correct.
                    let value = document.getElementById(`number-input-${a}`).value;
                    text = Number(value);

                    // This item is correct.
                        if (text === currentHunt.itemList[a].answer) {
                            currentHunt.currentProgress[a] = true;
                            $(`#field-input-spot-${a}`).html(`<span class="glyphicon glyphicon-ok"></span> ${currentHunt.itemList[a].answer}`);
                            $(`#field-input-spot-${a}`).addClass('lead');
                            $(`#field-input-spot-${a}`).addClass('correctAnswerClass');
                        }

                    // This item is wrong.
                        else {
                            $(`.text-input`).css('background-color','red');
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
                    $('#submit-button-3').html('Click here to finish the adventure!');
                    currentHunt.activity = 'complete';
                }
            
            // Some are wrong.
                else if (allCorrect === false) {
                    setTimeout(function(){
                        $('.text-input').css('background-color','white');
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
    // Get inputed values
    let playerInput = [];
    for (var a=0; a<currentHunt.itemList.length; a++) {
        if (currentHunt.currentProgress[a] === true) {
            playerInput[a] = currentHunt.itemList[a].answer;
        }
        else {
            let value = document.getElementById(`number-input-${a}`).value;
            playerInput[a] = Number(value);
        }
        
    }
    let result = 0;
    // Field 0
        result = playerInput[0];
    // Field 1
        result = playerInput[0] / playerInput[1];
    // Field 2
        // calculations go here
    // Field 3
        // calculations go here
    // Field 4
        // calculations go here
    // Field 5
        // calculations go here
    // Field 6
        // calculations go here
    // Field 7
        // calculations go here
    // Field 8
        // calculations go here
    // Field 9
        // calculations go here
    result = result.toFixed(7);
    return result
};