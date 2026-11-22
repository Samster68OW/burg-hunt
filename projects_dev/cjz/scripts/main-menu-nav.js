// Main Menu Navigation



function loadMainMenuPage(pageName) {
  $('.main-menu-page').fadeOut(0);
  $('#main-menu-table td').css('text-decoration','none');
  $(`#${pageName}`).fadeIn(0);
  $(`#${pageName}-butt`).css('text-decoration','underline');
  if (pageName === 'collection-page') {displayCardCollection();}
  updatePlayerMini();
};



function displayCardCollection() {

    let display = ``;
    let cardsCollected = [];

    // Create set progress list
        for (var a=0; a<setData.length; a++) {cardsCollected.push(0);}

    for (var b=setData.length-1; b>-1; b--) {

        display += `<div class='set-title'>${setData[b].name} <span id='set-progress-${b}'></span></div><table id='collection-table'>`;
        let cardsShown = 0;
        for (var a=0; a<setData[b].cardList.length; a++) {
            if (cardsShown % 6 === 0) {display += `<tr>`;}

            // Add Card
                if (player.cardCollection[setData[b].cardList[a]] === 0) {
                    if (setData[b].displayMissing === true) {
                        display += `
                        <td><div class='coll-card-div'>
                            <div class="missing-card">
                                <div><br>${cardsShown + 1}</div>
                            </div>
                        </div></td>
                        `;
                        cardsShown++;
                    }
                }
                if (player.cardCollection[setData[b].cardList[a]] > 0) {
                    display += `<td><div class='coll-card-div' onmouseenter='displayCollCard(${setData[b].cardList[a]});' onmouseleave='emptyCollCard();'>${generateCard(setData[b].cardList[a])}</div></td>`;
                    cardsShown++;
                    cardsCollected[b]++;
                }

            if (cardsShown % 6 === 0) {display += `</tr>`;}
        }
        if (cardsShown % 6 !== 0) {display += `</tr>`;}
        display += `</table>`;

    }
    $('#card-collection-spot').html(display);

    // Set Progress
        for (var b=setData.length-1; b>-1; b--) {
            if (setData[b].displayMissing === true) {
                if (cardsCollected[b] === setData[b].cardList.length) $(`#set-progress-${b}`).html(`(COMPLETE)`);
                else $(`#set-progress-${b}`).html(`(${cardsCollected[b]} / ${setData[b].cardList.length})`);
            }
        }

};
function displayCollCard(num) {
    $('#big-card-title').html(cardData[num].displayName);
    $('#the-big-card').html(`<div style='left: 105px; position: absolute;'>${generateCard(num)}</div>`);
    $('#card-flavor-text').html(cardData[num].flavorText);

};
function emptyCollCard() {
    $('#big-card-title').html(``);
    $('#the-big-card').html(``);
    $('#card-flavor-text').html(``);
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



function emojiInsert(input) {
    return `<img height=14 src='images/emoji/${input}.png'>`;
};



function generateCampaignPage() {
    let display = ``;
    for (var a=0; a<campaignData.length; a++) {
        display += `<div onclick='startCampaignLevel(${a});'>${campaignData[a].name}</div><br>`;
    }
    $('#campaign-page').html(display);
};



function updatePlayerMini() {

    $('#profile-mini').html(`
        <span style="font-size: 25px;">${player.username}</span><br>
        ${emojiInsert('coin')} ${player.coins}<br>
        Gems: ${player.gems}
        `);

};