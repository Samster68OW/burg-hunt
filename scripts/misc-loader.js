// Fan Art and Comic Loader



function generateDropdowns() {

    // Generate Scavenger Hunt Dropdown
        let display = ``;
        // Place active hunt
            if (activeHunt !== false) {
                if (activeHuntStatus === false) {
                    display += `<li><a href="#" onclick="loadPage('${huntList[activeHunt].imgSource}');">${huntList[activeHunt].title} <span class="label label-warning">Coming Soon!</span></a></li>`;
                }
                else if (activeHuntStatus === true) {
                    display += `<li><a href="#" onclick="loadPage('${huntList[activeHunt].imgSource}');">${huntList[activeHunt].title} <span class="label label-success">New!</span></a></li>`;
                }
                display += `<li role="separator" class="divider"></li>`;
            }
        // Place remaining hunts, and update buttons on pages
            for (var a=huntList.length-1; a>-1; a--) {
                if (a !== activeHunt) {
                    display += `<li><a href="#" onclick="loadPage('${huntList[a].imgSource}');">${huntList[a].title}</a></li>`;
                    $(`#${huntList[a].imgSource}-btn-spot`).html(`<button type="button" class="btn btn-danger" onclick="">This hunt is no longer available.</button>`);
                }
                else if (a === activeHunt) {
                    if (activeHuntStatus === false) {
                        $(`#${huntList[a].imgSource}-btn-spot`).html(`<button type="button" class="btn btn-warning" onclick="">This hunt is coming soon!</button>`);
                    }
                    else if (activeHuntStatus === true) {
                        $(`#${huntList[a].imgSource}-btn-spot`).html(`<button type="button" class="btn btn-success" onclick="startHunt(${a});">Click to start the scavenger hunt!</button>`);
                    }
                }
            }
        $('#hunt-dropdown-spot').html(display);

    // Generate button on Home Page
        if (activeHunt === false) {
            $(`#home-btn-spot`).html(`<button type="button" class="btn btn-warning" onclick="">There are no active hunts.</button>`);
        }
        else {
            if (activeHuntStatus === false) {
                $(`#home-btn-spot`).html(`<button type="button" class="btn btn-warning" onclick="loadPage('${huntList[activeHunt].imgSource}');">There is a hunt coming soon!</button>`);
            }
            else if (activeHuntStatus === true) {
                $(`#home-btn-spot`).html(`<button type="button" class="btn btn-success" onclick="loadPage('${huntList[activeHunt].imgSource}');">View the ongoing scavenger hunt!</button>`);
            }
        }
    
    // Generate Comic Dropdown
        display = ``;
        for (var a=comicList.length-1; a>-1; a--) {
            if (a === comicList.length-1) {
                display += `<li><a href="#" onclick="loadPage('comic'); loadComic(${a});">${comicList[a].title} <span class="label label-success">Newest!</span></a></li>`;
            }
            else {
                display += `<li><a href="#" onclick="loadPage('comic'); loadComic(${a});">${comicList[a].title}</a></li>`;
            }
        }
        $('#comic-dropdown-spot').html(display)

};



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