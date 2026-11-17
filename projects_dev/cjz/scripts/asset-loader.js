// Asset Loader



function launchButton() {

    loadImages();

};



let totalImagesLoaded = 0;
function loadImages() {

    let imageCount = 0;
    let newImageList = [];
    let display = ``;

    // Card Artwork
        for (let a=0; a<cardData.length; a++) {
            //newImageList.push(`images/card/card_${a}.png`);
            //display += `<span id="imageLoad${imageCount}"></span>`;
            //imageCount++;
        }

    // Remaining images
        for (let a=0; a<imageData.length; a++) {
            newImageList.push(`images/${imageData[a]}`);
            display += `<span id="imageLoad${imageCount}"></span>`;
            imageCount++;
        }

    // Loaded Images
        $('#image-load-spot').html(display);
        for (let a=0; a<imageCount; a++) {
            console.log(a);
            $(`#imageLoad${a}`).html(`<img src="${newImageList[a]}">`);
            $(`#imageLoad${a}`).load(function() {
                totalImagesLoaded++;
                console.log(totalImagesLoaded);
                if (totalImagesLoaded >= imageCount - 1) loadPage('main-menu');
            });
        }

};