// Start Battle



let battle = {
    energy: 1,
    player: {
        name: "Samster68",
        deck: [1,2,3,4,5, 6,7,8,9,10],
        hand: [],
        points: 0
    },
    opponent: {
        name: "Test Penguin",
        deck: [1,2,3,4,5, 6,7,8,9,10],
        hand: [],
        points: 0
    }
};



function startBattle() {

    // Shuffle decks
        //todo shuffling

    // Ready to go
        startRound();
        loadPage('battle-page');

};



function startRound() {

    // Deal Cards
        while (battle.player.hand.length < 5) {
            battle.player.hand.push(battle.player.deck[0]);
            battle.player.deck.splice(0, 1);
        }
        while (battle.opponent.hand.length < 5) {
            battle.opponent.hand.push(battle.opponent.deck[0]);
            battle.opponent.deck.splice(0, 1);
        }

    // Display stats
        $('#opponent-points-spot').html(`Opponent: ${battle.opponent.points}`);
        $('#player-points-spot').html(`Player: ${battle.player.points}`);

    // Display Player's cards
        let display = `<table id='player-card-table'><tr>`;
        for (var a=0; a<battle.player.hand.length; a++) {
           display += `<td><div style='zoom:0.4;'>${generateCard(battle.player.hand[a])}</div></td>`;
        }
        display += `</tr></table>`;
        $('#player-cards-spot').html(display);

};



function playCard(cardNum) {

    // Get cards' info
        let playersCard = cardData[battle.player.hand[cardNum]];
        let oppCardNum = Math.floor(Math.random()*5);
        let opponentsCard = cardData[battle.opponent.hand[oppCardNum]];
        console.log(playersCard.type);
        console.log(opponentsCard.type);

    // Who won?
        if (playersCard.type === 'Fire' && opponentsCard.type === 'Snow' || playersCard.type === 'Water' && opponentsCard.type === 'Fire' || playersCard.type === 'Snow' && opponentsCard.type === 'Water') {
            battle.player.points += battle.energy;
            battle.energy = 1;
        }
        else if (opponentsCard.type === 'Fire' && playersCard.type === 'Snow' || opponentsCard.type === 'Water' && playersCard.type === 'Fire' || opponentsCard.type === 'Snow' && playersCard.type === 'Water') {
            battle.opponent.points += battle.energy;
            battle.energy = 1;
        }
        else {
            // On a tie, ramp up the heat!
            battle.energy++;
        }

    // Discard back to the deck.
        battle.player.deck.push(battle.player.hand[cardNum]);
        battle.player.hand.splice(cardNum, 1);
        battle.opponent.deck.push(battle.opponent.hand[oppCardNum]);
        battle.opponent.hand.splice(oppCardNum, 1);

    // Clean up
        startRound();

};