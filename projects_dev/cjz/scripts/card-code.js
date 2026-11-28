// Card Code



function generateCard(cardNum, amountTag) {

    // Show the amount of cards collected?
        if (!amountTag) amountTag = false;
        let amountDiv = ``;
        if (amountTag === true && player.cardCollection[cardNum] > 1) {
            amountDiv = `<div class='card-amount'>${player.cardCollection[cardNum]}</div>`;
            console.log('yep');
        }
    
    let display = `
        <div class="card-main">
            <div class="card-art" style="
                background-image: url('images/card/card_${cardNum}.png');
                background-position: ${cardData[cardNum].background.x}px ${cardData[cardNum].background.y}px;
                background-size: ${cardData[cardNum].background.size}px;
                "></div>
            <div class="card-frame">
                <div class="card-element" style="background-image:url('images/card_detail/${cardData[cardNum].element}.png')"></div>
                <div class="card-number">${cardData[cardNum].stat.toString()}</div>
            </div>
            <div class="card-little-info">${findCardSet(cardNum)}</div>
            ${amountDiv}
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



function generateStoreItem(itemNum) {

    let display = `
        <table class='pack-table'>
            <tr>
                <td class='pack-top-tab'></td>
            </tr>
            <tr>
                <td class='pack-main-body'>
                    Featured<br>Penguins
                </td>
            </tr>
        </table>
    `;
    return display;

};