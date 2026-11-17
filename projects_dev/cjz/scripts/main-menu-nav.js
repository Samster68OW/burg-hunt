// Main Menu Navigation



function loadMainMenuPage(pageName) {
  $('.main-menu-page').fadeOut(0);
  $('#main-menu-table td').css('text-decoration','none');
  $(`#${pageName}`).fadeIn(0);
  $(`#${pageName}-butt`).css('text-decoration','underline');
  if (pageName === 'collection-page') {displayCardCollection();}
};



function displayCardCollection() {

    let display = ``;

    for (var b=setData.length-1; b>-1; b--) {

        display += `<h2>${setData[b].name}</h2><br><table id='collection-table'>`;
        let cardsShown = 0;
        for (var a=0; a<setData[b].cardList.length; a++) {
            if (cardsShown % 6 === 0) {display += `<tr>`;}

            // Add Card
                if (player.cardCollection[setData[b].cardList[a]] === 0) {
                    if (setData[b].displayMissing === true) {
                        display += `<td style='text-align:center;'><div class='card-main missing-card'><br>${a+1}</div></td>`;
                        cardsShown++;
                    }
                }
                if (player.cardCollection[setData[b].cardList[a]] > 0) {
                    display += `<td><div class='coll-card-div' onmouseenter='displayCollCard(${setData[b].cardList[a]});' onmouseleave='emptyCollCard();'>${generateCard(setData[b].cardList[a])}</div></td>`;
                    cardsShown++;
                }

            if (cardsShown % 6 === 0) {display += `</tr>`;}
        }
        display += `</table><br>`;

    }
    
    $('#card-collection-spot').html(display);
};
function displayCollCard(num) {
    $('#big-card-spot').html(`<h2>${cardData[num].displayName}</h2><div id='the-big-card'>${generateCard(num)}</div>`);
};
function emptyCollCard() {
    $('#big-card-spot').html(``);
};



// Store Functions
function setupStore() {

    // Loop through store and add stuff
        let display = `<center>`
        for (var a=0; a<currentStoreOfferings.length; a++) {
            display += `<div>
                <img src='images/store_item/${storeItemData[currentStoreOfferings[a].storeItemID].imgSource}' onclick='buyStoreItem(${a});' class='store-class'><br>
                ${currentStoreOfferings[a].coins} ${emojiInsert('coin')}
                </div>`;
        }
        display += `</center>`
        $('#store-section').html(display);

};
function buyStoreItem(itemNum) {

    // Check to make sure the player wants to open it.
        if (confirm(`Are you sure you want to purchase a ${storeItemData[currentStoreOfferings[itemNum].storeItemID].name}?`) === false) {return}
        if (player.coins < currentStoreOfferings[itemNum].coins) {
            alert("You do not have enough coins to purchase this.");
            return
        }
        player.coins -= currentStoreOfferings[itemNum].coins;

    // Open the item!
        openStoreItem(currentStoreOfferings[itemNum].storeItemID);

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
                    output.push(cardData[newCard].displayName);
                    break;

                }
            }

        }

    // Recalculate player's cards
        loadCardCollection();

    return output

};



function emojiInsert(input) {
    return `<img height=10 src='images/emoji/${input}.png'>`;
};



function generateCampaignPage() {
    let display = ``;
    for (var a=0; a<campaignData.length; a++) {
        display += `<div onclick='startCampaignLevel(${a});'>${campaignData[a].name}</div><br>`;
    }
    $('#campaign-page').html(display);
};