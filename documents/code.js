// Code



let itemList;



function startHunt(huntID) {
    // Load item data
        switch (huntID) {
            case 0:
                itemList = jan2026Event.list;
                shuffle(itemList);
                console.log(itemList);
                break;
        }
    // Load Page
};


function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}