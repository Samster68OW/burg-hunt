// Main Menu Navigation



function loadMainMenuPage(pageName) {
  $('.main-menu-page').fadeOut(0);
  $(`#${pageName}`).fadeIn(0);
  if (pageName === 'collection-page') {displayCardCollection();}
};



function displayCardCollection() {
    let display = ``;
    for (var a=1; a<player.cardCollection.length; a++) {
        if (player.cardCollection[a] === 0) {
            display += `??????<br>`;
        }
        if (player.cardCollection[a] > 0) {
            display += `${cardData[a].displayName} (x${player.cardCollection[a]})<br>`;
        }
    }
    $('#card-collection-spot').html(display);
};