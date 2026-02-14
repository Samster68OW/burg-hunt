// Fan Art and Comic Loader



function loadFanArtPage() {
    // Generate display
        let display = ``;
        for (var a=fanartList.length-1; a>-1; a--) {
            display += `<p class="lead">"${fanartList[a].title}" by ${fanartList[a].fanartCredit}</p>`;
            display += `<img src="images/fan-art/${fanartList[a].imgSource}" class="img-responsive img-postcard" style="width:600px;" alt="Postcard"><br><br><br>`;
        }
    // Show postcards
        $('#fanart-display-spot').html(display);
};



function loadComic(num) {
    let comicData = comicList[num];
    $('#comic-title-spot').html(comicData.title);
    let display = '';
    for (var a=0; a<comicData.pages; a++) {
        if (a === 0) {display += `<li data-target="#carousel-comic" data-slide-to="0" class="active"></li>`;}
        else {display += `<li data-target="#carousel-comic" data-slide-to="${a}"></li>`;}
    }
    $('#car-indi-spot').html(display);
    display = '';
    for (var a=0; a<comicData.pages; a++) {
        if (a === 0) {display += `<div class="item active"><img src="images/comic/${comicData.imgSource}/page_0.png" alt="Comic Page 0"></div>`;}
        else {display += `<div class="item"><img src="images/comic/${comicData.imgSource}/page_${a}.png" alt="Comic Page ${a}"></div>`;}
    }
    $('#car-inn-spot').html(display);
    $('#comic-publish-spot').html(`Published on ${comicData.publishDate}.`);
};