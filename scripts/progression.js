// Progression Page



// Things to update when new content is added:
//
// The Stamps field on the progress page
// The function below
// Needs work with automated html, save data, and point totals.
//



function updateProgressStats() {
    // Setup values
        let totalPoints = 0;
        let playerPoints = 0;
    // Check Stamps field
        // Get stamps
            totalPoints += 92;
            playerPoints += Number(document.getElementById("stamp-text-field").value);
        // Update stamp progress bar
            let stampProgress = Math.floor(playerPoints * 100 / totalPoints);
            $('#player-stamp-progress-bar').css('width',`${stampProgress}%`);
            $('#player-stamp-progress-bar').html(`${stampProgress}%`);
    // Check checkboxes
        // Get checkboxes
            totalPoints += 8;
            if (document.getElementById("upgrade-1").checked === true) {playerPoints++;}
            if (document.getElementById("upgrade-2").checked === true) {playerPoints++;}
            if (document.getElementById("upgrade-3").checked === true) {playerPoints++;}
            if (document.getElementById("misc-1").checked === true) {playerPoints++;}
            if (document.getElementById("minigame-1").checked === true) {playerPoints++;}
            if (document.getElementById("minigame-2").checked === true) {playerPoints++;}
            if (document.getElementById("minigame-3").checked === true) {playerPoints++;}
            if (document.getElementById("minigame-4").checked === true) {playerPoints++;}
    // Display progress statistics
        let playerProgress = Math.floor(playerPoints * 100 / totalPoints);
        $('#player-total-progress-bar').css('width',`${playerProgress}%`);
        $('#player-total-progress-bar').html(`${playerProgress}%`);
};