// Main Menu Navigation



function loadMainMenuPage(pageName) {
  $('.main-menu-page').fadeOut(0);
  $(`#${pageName}`).fadeIn(0);
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
                    display += `<td><div style='zoom:0.4;'>${generateCard(setData[b].cardList[a])}</div></td>`;
                }

            if (a % 6 === 5) {display += `</tr>`;}
        }
        display += `</table><br>`;

    }
    
    $('#card-collection-spot').html(display);
};



function openStoreItem(itemNum) {

    // Setup card output
        let output = [];

    let item = storeItemData[itemNum];

    // Get total weight
        let totalWeight = 0;
        for (var a=0; a<item.categories.length; a++) {
            totalWeight += item.categories[a].weight;
        }
    
    // Grab all the cards!
        for (var b=0; b<item.rolls; b++) {

            // Pick category
            let random = Math.random() * totalWeight;
            for (var c=0; c<item.categories.length; c++) {
                random -= item.categories[c].weight;
                if (random <= 0) {

                    // Pick card in category
                    let chosenCard = Math.floor(Math.random()*item.categories[c].cardList.length);
                    let newCard = item.categories[c].cardList[chosenCard];
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