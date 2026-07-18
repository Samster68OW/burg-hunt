// Game Code



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
            <div class="card-main" style="background-color:${cardColor};">
                <div class="card-art">
                    <div class="card-type" style="background-color:${cardColor};"><img src='images/card/${cardData[cardNum].type}.png'></div>
                    <div class="card-number">${findCardSet(cardNum)}</div>
                </div>
                <img class='card-sheen-img' src='images/card/1410.png'>
            </div>
        `;
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