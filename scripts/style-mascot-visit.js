// Mascot Visit Style



function loadMascotVisitItems() {
    if (currentHunt.currentItem >= currentHunt.itemList.length) {
        completeHunt();
        return;
    }
    // Reset
        $('#Fishing-Minigame-content').fadeOut(0);
        $('#Digging-Minigame-content').fadeOut(0);
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
            startFishingMinigame();
            $('#Fishing-Minigame-content').fadeIn(0);
            break;
        case 'One-Letter-Minigame':
            let singleLetterPhrase = oneLetterMinigameList[Math.floor(Math.random()*oneLetterMinigameList.length)];
            $('#mascot-visit-content-spot').html(`
                <span style='font-size:20px;'>Your clue: ${singleLetterPhrase}</span><br><br>
                <input type="text" class="text-input" id="mascot-visit-input-${currentHunt.currentItem}" style='width:125px;' placeholder="?" maxlength=10>
                `);
            $('#submit-button-4').fadeIn(0);
            $('#submit-button-4').html("Submit Answer");
            break;
        case 'Digging-Minigame':
            startDiggingMinigame();
            $('#Digging-Minigame-content').fadeIn(0);
            break;
    }
};



// Fishing Minigame
let fishingMinigame;
let fishingLoop;
function startFishingMinigame() {
    $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-default.png")');
    fishingMinigame = {
        fishCaught: 0,
        mode: 'waiting',
        ticksLeft: 5
    };
    startFishingLoop();
};
function startFishingLoop() {
    fishingLoop = setInterval(function(){
        fishingMinigame.ticksLeft--;
        if (fishingMinigame.ticksLeft <= 0) {
            switch (fishingMinigame.mode) {
                case 'waiting':
                    $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-default.png")');
                    $('#fishing-status-spot').html(`Tug!`);
                    fishingMinigame.mode = 'line tugged';
                    fishingMinigame.ticksLeft = 1;
                    break;
                case 'line tugged':
                case 'caught':
                case 'miss':
                    $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-default.png")');
                    $('#fishing-status-spot').html(``);
                    fishingMinigame.mode = 'waiting';
                    fishingMinigame.ticksLeft = 10;
                    break;
            }
        }
    },500);
};
function fishingReelIn() {
    switch (fishingMinigame.mode) {
        case 'waiting':
            $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-fail.png")');
            $('#fishing-status-spot').html(`MISS!`);
            fishingMinigame.mode = 'miss';
            fishingMinigame.ticksLeft = 4;
            break;
        case 'line tugged':
            fishingMinigame.fishCaught++;
            $('#fishing-status-spot').html(`Nice catch!`);
            if (fishingMinigame.fishCaught >= 5) {
                $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-end.png")');
                clearInterval(fishingLoop);
                fishingMinigame.mode = 'game won';
                $('#reel-in-button').html('Continue')
            }
            else {
                $('#fishing-minigame-frame').css('background-image','url("images/aug2026/fishing-caught.png")');
                fishingMinigame.mode = 'caught';
                fishingMinigame.ticksLeft = 4;
            }
            break;
        case 'game won':
            currentHunt.currentItem++;
            loadMascotVisitItems();
            break;
    }
};



// Forest Minigame
const oneLetterMinigameList = [
    "The first letter is F.",
    "The second letter is O.",
    "The third letter is R.",
    "The fourth letter is E.",
    "The fifth letter is S.",
    "The sixth letter is T."
];



// Digging Minigame
let diggingMinigame;
function startDiggingMinigame() {
    $('#digging-minigame-frame').css('background-image','url("images/aug2026/shovel-in.png")');
    diggingMinigame = {
        snowsLeft: 100,
        mode: 'shovelIn'
    };
};
function diggingDigOut() {
    if (diggingMinigame.mode === 'shovelIn') {
        if (diggingMinigame.snowsLeft <= 0) return;
        $('#digging-minigame-frame').css('background-image','url("images/aug2026/shovel-out.png")');
        diggingMinigame.mode = 'shovelOut';
        diggingMinigame.snowsLeft--;
        $('#snows-dug-spot').html(`${diggingMinigame.snowsLeft} left!`);
        if (diggingMinigame.snowsLeft === 75) {
            $('#snows-dug-spot').fadeIn(2000);
        }
        else if (diggingMinigame.snowsLeft === 0) {
            $('#snows-dug-spot').html(`You found the map!`);
            $('#LA-PALA-TEXT').fadeIn(0);
            setTimeout(function() {
                currentHunt.currentItem++;
                loadMascotVisitItems();
            },4000);
        }
    }
};
function diggingDigIn() {
    if (diggingMinigame.mode === 'shovelOut') {
        $('#digging-minigame-frame').css('background-image','url("images/aug2026/shovel-in.png")');
        diggingMinigame.mode = 'shovelIn';
    }
};