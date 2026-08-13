// Mascot Visit Style



function loadMascotVisitItems() {
    if (currentHunt.currentItem >= currentHunt.itemList.length) {
        completeHunt();
        return;
    }
    $('.hunt-header').html(currentHunt.itemList[currentHunt.currentItem].text);
    switch (currentHunt.itemList[currentHunt.currentItem].type) {
        case 'Description':
            $('#mascot-visit-content-spot').html('');
            $('#submit-button-4').html("I'm There!");
            break;
        case 'Question':
            $('#mascot-visit-content-spot').html(`<input type="text" class="text-input" id="mascot-visit-input-${currentHunt.currentItem}" style='width:125px;' placeholder="?" maxlength=10>`);
            $('#submit-button-4').html("Submit Answer");
            break;
        case 'Minigame':
            $('#mascot-visit-content-spot').html(`Content`);
            $('#submit-button-4').html("Move on...");
            break;
    }
    console.log(currentHunt);
};



function checkMascotVisitAnswer() {
    switch (currentHunt.itemList[currentHunt.currentItem].type) {
        case 'Description':
        case 'Minigame':
            currentHunt.currentItem++;
            loadMascotVisitItems();
            break;
        case 'Question':
            let value = document.getElementById(`mascot-visit-input-${currentHunt.currentItem}`).value;
            if (value.toUpperCase() === currentHunt.itemList[currentHunt.currentItem].answer.toUpperCase()) {
                currentHunt.currentItem++;
                loadMascotVisitItems();
            }
            else {
                alert("Incorrect!");
            }
            break;
    }
};