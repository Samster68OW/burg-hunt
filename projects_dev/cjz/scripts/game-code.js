// Game Code



// Card Texture: https://www.magnific.com/free-photos-vectors/trading-card-texture
// Font: https://fonts.google.com/selection/embed



function generateCard(cardNum) {

    // Get color
        let cardColor = "#000000";
        switch (cardData[cardNum].type) {
            case "Fire": cardColor = cardColorData[0]; break
            case "Water": cardColor = cardColorData[1]; break
            case "Snow": cardColor = cardColorData[2]; break
        }
    
    // Display Card
        let display = `
            <div class="card-main">
                <div class="card-art" style="background-image:url('images/card/card_${cardNum}.png')"></div>
                <div class="card-frame">
                    <div class="card-type" style="background-image:url('images/card_detail/${cardData[cardNum].type}.png')"></div>
                    <div class="card-number">${cardData[cardNum].stat.toString()}</div>
                </div>
            </div>
        `;
        let addLater = `<div class="card-number">${findCardSet(cardNum)}</div><img class='card-sheen-img' src='images/card_detail/1410.png'>`;
        return display;
};



function findCardSet(cardNum) {
    let setInfo = false;
    for (var a=0; a<setData.length; a++) {
        for (var b=0; b<setData[a].cardList.length; b++) {
            if (setData[a].cardList[b] === cardNum) {
                if (setData[a].displayMissing === true) {
                    setInfo = `${setData[a].id} ${b + 1}/${setData[a].cardList.length} ${rarityData[cardData[cardNum].rarity]}`;
                }
                else if (setData[a].displayMissing === false) {
                    setInfo = `${setData[a].id} ${b + 1} ${rarityData[cardData[cardNum].rarity]}`;
                }
                break;
            }
        }
        if (setInfo !== false) {break;}
    }
    return setInfo
};