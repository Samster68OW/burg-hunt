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
                    <div class="card-type" style="background-color:${cardColor};">${cardData[cardNum].type}</div>
                    <div class="card-number">${findCardSet(cardNum)}</div>
                </div>
            </div>
        `;
        return display;
};



function findCardSet(cardNum) {
    let setInfo = false;
    for (var a=0; a<setData.length; a++) {
        for (var b=0; b<setData[a].cardList.length; b++) {
            if (setData[a].cardList[b] === cardNum) {
                setInfo = `${setData[a].id} ${b + 1}/${setData[a].cardList.length}`;
                break;
            }
        }
        for (var b=0; b<setData[a].extraCardList.length; b++) {
            if (setData[a].extraCardList[b] === cardNum) {
                setInfo = `${setData[a].id} $`;
                break;
            }
        }
        if (setInfo !== false) {break;}
    }
    return setInfo
};