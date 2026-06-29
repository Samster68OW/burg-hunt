// Start Battle



let battle = {};



function startBattle() {

    // Shuffle decks
        //todo shuffling

    // Ready to go
        startRound();
        loadPage('battle-page');

};
function startCampaignLevel(level) {
    currentLevel = campaignData[level];

    // Setup battle variable
        battle = {
            energy: 1,
            player: {
                name: player.username,
                health: currentLevel.player.health,
                deck: currentLevel.player.deck,
                hand: []
            },
            opponent: {
                name: currentLevel.opponent.name,
                health: currentLevel.opponent.health,
                deck: currentLevel.opponent.deck,
                hand: []
            }
        };

    // Go!
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
        $('#player-health-spot').html(`Player: ${battle.player.health}`);
        $('#opponent-health-spot').html(`Opponent: ${battle.opponent.health}`);
        $('#card-statistics-spot').html(`Energy: ${battle.energy}`);

    // Display Player's cards
        let display = `<table id='player-card-table'><tr>`;
        for (var a=0; a<battle.player.hand.length; a++) {
           display += `<td onclick='playCard(${a});'><div style='zoom:0.3;'>${generateCard(battle.player.hand[a])}</div></td>`;
        }
        display += `</tr></table>`;
        $('#player-cards-spot').html(display);

};



function playCard(cardNum) {

    // Get cards' info
        let playersCard = cardData[battle.player.hand[cardNum]];
        let oppCardNum = Math.floor(Math.random()*5);
        let opponentsCard = cardData[battle.opponent.hand[oppCardNum]];

    // Who won?
        if (playersCard.type === 'Fire' && opponentsCard.type === 'Snow' || playersCard.type === 'Water' && opponentsCard.type === 'Fire' || playersCard.type === 'Snow' && opponentsCard.type === 'Water') {
            // Player wins hand
            battle.opponent.health -= battle.energy;
            battle.energy = 1;
        }
        else if (opponentsCard.type === 'Fire' && playersCard.type === 'Snow' || opponentsCard.type === 'Water' && playersCard.type === 'Fire' || opponentsCard.type === 'Snow' && playersCard.type === 'Water') {
            // Opponent wins hand
            battle.player.health -= battle.energy;
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