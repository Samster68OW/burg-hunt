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
            active: false,
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
        for (var b=0; b<battle.player.hand.length; b++) {
            if (battle.player.hand[b] === -1) {
                battle.player.hand[b] = battle.player.deck[0];
                battle.player.deck.splice(0, 1);
            }
        }
        while (battle.opponent.hand.length < 5) {
            battle.opponent.hand.push(battle.opponent.deck[0]);
            battle.opponent.deck.splice(0, 1);
        }
        for (var b=0; b<battle.opponent.hand.length; b++) {
            if (battle.opponent.hand[b] === -1) {
                battle.opponent.hand[b] = battle.opponent.deck[0];
                battle.opponent.deck.splice(0, 1);
            }
        }

    // Display stats
        $('#player-health-spot').html(`Player: ${battle.player.health}`);
        $('#opponent-health-spot').html(`Opponent: ${battle.opponent.health}`);
        $('#card-statistics-spot').html(`Energy: ${battle.energy}`);

    // Display Player's cards
        let display = `<table id='player-card-table'><tr>`;
        for (var a=0; a<battle.player.hand.length; a++) {
           display += `<td onclick='playCard(${a});' id='player-card-${a}'><div style='zoom:0.4;'>${generateCard(battle.player.hand[a])}</div></td>`;
        }
        display += `</tr></table>`;
        $('#player-cards-spot').html(display);
        battle.active = true;

};



function playCard(cardNum) {
    if (battle.active === false) {return}
    battle.active = false;

    // Get cards' info
        let playersCard = cardData[battle.player.hand[cardNum]];
        $(`#player-card-${cardNum}`).css('opacity','0');
        let oppCardNum = Math.floor(Math.random()*5);
        let opponentsCard = cardData[battle.opponent.hand[oppCardNum]];
    
    // Display chosen cards
        $('#player-played-card-spot').html(generateCard(battle.player.hand[cardNum]));
        $('#player-played-card-spot').fadeIn(0);
        $('#opponent-played-card-spot').html(generateCard(battle.opponent.hand[oppCardNum]));
        $('#opponent-played-card-spot').fadeIn(0);


    // Who won?
        setTimeout(function() {
            if (playersCard.type === 'Fire' && opponentsCard.type === 'Snow' || playersCard.type === 'Water' && opponentsCard.type === 'Fire' || playersCard.type === 'Snow' && opponentsCard.type === 'Water') {
                // Player wins hand
                $('#opponent-played-card-spot').fadeOut(0);
                battle.opponent.health -= battle.energy;
                battle.energy = 1;
            }
            else if (opponentsCard.type === 'Fire' && playersCard.type === 'Snow' || opponentsCard.type === 'Water' && playersCard.type === 'Fire' || opponentsCard.type === 'Snow' && playersCard.type === 'Water') {
                // Opponent wins hand
                $('#player-played-card-spot').fadeOut(0);
                battle.player.health -= battle.energy;
                battle.energy = 1;
            }
            else {
                // On a tie, ramp up the heat!
                $('#player-played-card-spot').fadeOut(0);
                $('#opponent-played-card-spot').fadeOut(0);
                battle.energy++;
            }
        },1000);

    // Discard back to the deck.
        battle.player.deck.push(battle.player.hand[cardNum]);
        battle.player.hand[cardNum] = -1;
        battle.opponent.deck.push(battle.opponent.hand[oppCardNum]);
        battle.opponent.hand[cardNum] = -1;

    // Clean up
        setTimeout(function() {
            startRound();
            $('#player-played-card-spot').fadeOut(0);
            $('#opponent-played-card-spot').fadeOut(0);
        },2000);

};