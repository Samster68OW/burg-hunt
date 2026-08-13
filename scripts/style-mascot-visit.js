// Mascot Visit Style



function loadMascotVisitItems() {
    if (currentHunt.currentItem >= currentHunt.itemList.length) {
        completeHunt();
        return;
    }
    $('.hunt-header').html(currentHunt.itemList[currentHunt.currentItem].text);
    $('#submit-button-4').fadeIn(0);
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
            $('#submit-button-4').fadeOut(0);
            $('#submit-button-4').html("");
            mascotVisitMinigame(currentHunt.itemList[currentHunt.currentItem].name);
            break;
    }
};



function checkMascotVisitAnswer() {
    switch (currentHunt.itemList[currentHunt.currentItem].type) {
        case 'Description':
            currentHunt.currentItem++;
            loadMascotVisitItems();
            break;
        case 'Question':
            let value = document.getElementById(`mascot-visit-input-${currentHunt.currentItem}`).value;
            if (value.toUpperCase() === currentHunt.itemList[currentHunt.currentItem].answer.toUpperCase()) {
                currentHunt.currentItem++;
                loadMascotVisitItems();
            }
            break;
        case 'Minigame':
            switch (currentHunt.itemList[currentHunt.currentItem].name) {
                case 'One-Letter-Minigame':
                    let value = document.getElementById(`mascot-visit-input-${currentHunt.currentItem}`).value;
                    if (value.toUpperCase() === currentHunt.itemList[currentHunt.currentItem].answer.toUpperCase()) {
                        currentHunt.currentItem++;
                        loadMascotVisitItems();
                    }
                    break;
            }
            break;
    }
};



function mascotVisitMinigame(name) {
    switch (name) {
        case 'Fishing-Minigame':
            $('#mascot-visit-content-spot').html(`Content`);
            break;
        case 'One-Letter-Minigame':
            let singleLetterPhrase = oneLetterMinigameList[Math.floor(Math.random()*oneLetterMinigameList.length)];
            $('#mascot-visit-content-spot').html(`
                ${singleLetterPhrase}<br><br>
                <input type="text" class="text-input" id="mascot-visit-input-${currentHunt.currentItem}" style='width:125px;' placeholder="?" maxlength=10>
                `);
            $('#submit-button-4').fadeIn(0);
            $('#submit-button-4').html("Submit Answer");
            break;
        case 'Digging-Minigame':
            $('#mascot-visit-content-spot').html(`Content`);
            break;
    }
};
const oneLetterMinigameList = [
    "The first letter is F.",
    "The second letter is O.",
    "The third letter is R.",
    "The fourth letter is E.",
    "The fifth letter is S.",
    "The sixth letter is T."
];