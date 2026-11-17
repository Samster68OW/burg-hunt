// Player Loader



let player = {
    username: "Samster68",
    coins: 0,
    obtainedCards: [3, 4, 2, 1],
    gifts: []
};



function loadCardCollection() {
    player.cardCollection = [];
    for (var a=0; a<cardData.length; a++) {
        player.cardCollection.push(0);
    }
    for (var b=0; b<player.obtainedCards.length; b++) {
        player.cardCollection[player.obtainedCards[b]]++;
    }
};