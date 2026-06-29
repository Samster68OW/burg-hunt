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

    for (var b=0; b<setData.length; b++) {

        display += `${setData[b].name}<br><table id='collection-table'>`;
        for (var a=0; a<setData[b].cardList.length; a++) {
            if (a % 6 === 0) {display += `<tr>`;}

            // Add Card
                if (player.cardCollection[setData[b].cardList[a]] === 0) {
                    display += `<td style='text-align:center;'><div class='card-main missing-card'><br>${a+1}</div></td>`;
                }
                if (player.cardCollection[setData[b].cardList[a]] > 0) {
                    display += `<td><div style='zoom:0.4' onmouseenter='displayCollCard(${setData[b].cardList[a]});' onmouseleave='emptyCollCard();'>${generateCard(setData[b].cardList[a])}</div></td>`;
                }

            if (a % 6 === 5) {display += `</tr>`;}
        }
        display += `</table><br>`;

    }
    
    $('#card-collection-spot').html(display);
};
function displayCollCard(num) {
    $('#big-card-spot').html(`<h2>${cardData[num].displayName}</h2>${generateCard(num)}`);
};
function emptyCollCard() {
    $('#big-card-spot').html(``);
};



// Store Functions
function setupStore() {

    // Loop through store and add stuff
        let display = `<h1>Store</h1>`
        for (var a=0; a<currentStoreOfferings.length; a++) {
            display += `<div style='cursor:pointer;' onclick='openStoreItem(${currentStoreOfferings[a].storeItemID});'>${storeItemData[currentStoreOfferings[a].storeItemID].name} (${currentStoreOfferings[a].coins} Coins)</div>`;
        }
        $('#store-page').html(display);

};
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