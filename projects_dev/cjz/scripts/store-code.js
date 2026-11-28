// Store Code





const date1 = new Date("November 12, 2026");
const date2 = new Date("November 18, 2026");



function dateActive(startDate, endDate) {
    let timestamp = Date.now();
    let currDate = new Date(timestamp);

    // TODO: This function does not work if the date crosses months or years!

    // Check Year
        if (currDate.getFullYear() < startDate.getFullYear()) return false;
        if (currDate.getFullYear() > endDate.getFullYear()) return false;

    // Check Month
        if (currDate.getMonth() < startDate.getMonth()) return false;
        if (currDate.getMonth() > endDate.getMonth()) return false;

    // Check Date
        if (currDate.getDate() < startDate.getDate()) return false;
        if (currDate.getDate() > endDate.getDate()) return false;

    return true;

};



const monthNames = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
];







function buyStoreItem(itemNum) {

    // Check to make sure the player wants to open it.
        if (confirm(`Are you sure you want to purchase a ${storeItemData[currentStoreOfferings[itemNum].storeItemID].name}?`) === false) {return}
        if (player.coins < currentStoreOfferings[itemNum].coins) {
            alert("You do not have enough coins to purchase this.");
            return
        }
        player.coins -= currentStoreOfferings[itemNum].coins;
        updatePlayerMini();

    // Open the item!
        let newCardList = openStoreItem(currentStoreOfferings[itemNum].storeItemID);

    // Do the theatrics!
        revealStoreItem(itemNum, newCardList);

}
function openStoreItem(itemNum) {

    // Setup card output
        let output = [];

    let item = storeItemData[itemNum];

    // Get total weight
        let totalWeight = 0;
        for (var a=0; a<item.outcomes.length; a++) {
            totalWeight += item.outcomes[a].weight;
        }
    
    // Grab all the cards!
        for (var b=0; b<item.rolls; b++) {

            // Pick category
            let random = Math.random() * totalWeight;
            for (var c=0; c<item.outcomes.length; c++) {
                random -= item.outcomes[c].weight;
                if (random <= 0) {

                    // Pick card in category
                    let chosenCard = Math.floor(Math.random()*item.outcomes[c].cardList.length);
                    let newCard = item.outcomes[c].cardList[chosenCard];
                    player.obtainedCards.push(newCard);
                    output.push(newCard);
                    break;

                }
            }

        }

    // Recalculate player's cards
        loadCardCollection();

    return output

};



function revealStoreItem(itemNum, itemOutput) {

    // Setup
        $('#purchased-item-spot').fadeIn(0);
        $('#item-drop-zone').fadeOut(0);

    let isNew = '';
    if (player.cardCollection[itemOutput[0]] === 1) isNew = 'NEW!';

    switch (storeItemData[itemNum].type) {
        case 'booster':
            $('#purchased-item-spot').html(generateStoreItem(itemNum));
            $('#purchased-item-spot').addClass('slideCardUpClass');
            //$('#item-drop-zone').html(`
                //<h1>Cards Obtained:</h1><br>
                //<div style='zoom: 0.6;'>${generateCard(itemOutput[0])}</div><br><br><br><br><br><br><br><br><br><br><br><br><br>
                //${isNew}
                //`);
            break;
    }


    loadPage('opening-screen');

};