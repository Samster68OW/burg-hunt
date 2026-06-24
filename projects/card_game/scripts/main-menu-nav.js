// Main Menu Navigation



function loadMainMenuPage(pageName) {
  $('.main-menu-page').fadeOut(0);
  $(`#${pageName}`).fadeIn(0);
  if (pageName === 'collection-page') {displayCardCollection();}
};



function displayCardCollection() {
    let display = `<table id='collection-table'>`;
    for (var a=1; a<player.cardCollection.length; a++) {
        if (a % 6 === 1) {display += `<tr>`;}

        // Add Card
            if (player.cardCollection[a] === 0) {
                display += `<td style='text-align:center;'>#${a}</td>`;
            }
            if (player.cardCollection[a] > 0) {
                display += `<td><div style='zoom:0.5;'>${generateCard(a)}</div></td>`;
            }

        if (a % 6 === 0) {display += `</tr>`;}
    }
    display += `</table>`;
    $('#card-collection-spot').html(display);
};