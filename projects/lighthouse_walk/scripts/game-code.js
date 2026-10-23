// Game Code



const gameStat = {
    fps: 20 // Ticks per second
};
let currentLevel = 0;
let currentDia = 0;
let timeRemaining = 0;
let currentEnemyEl = 0;
let enemyList = [];
let intervalVar;
let hoveringEnemy = false;
let lastSpawnpoint = 10;



// Start Button
function startGameButton() {

    // Load everything!
        loadSounds();
        $('.main-div').fadeOut(0);

    // Load first room
        currentLevel = 3;
        setTimeout(function(){
            currentDia = 0;
            loadRoom(currentLevel);
        },2000);

};



// Dialogue
function loadRoom(roomNum) {

    // Load into room
        $('#gameplay-screen').css('background-image',`url("images/backgrounds/area_${roomNum}.png")`);
        if (roomNum >= 1 && roomNum <= 5) displayFriend();
        else $('#surferbro-img').fadeOut(0);
        $('#the-end-title').fadeOut(0);
        $('#the-end-title-two').fadeOut(0);
        $('#black-box').css('opacity','0');
        loadArea('gameplay', true);
        setTimeout(function(){
            loadDialogue();
        },3000);

    // Background Music
        if (roomNum === 0) {restartSound('BG Music - Sea Waves');}
        if (roomNum === 6) {restartSound('BG Music - Final Scene');}

};
function displayFriend() {
    $('#surferbro-img').fadeIn(0);
    $('#surferbro-img').css('left',`${levelData[currentLevel].endpoint.x - 50}px`);
    $('#surferbro-img').css('bottom',`${levelData[currentLevel].endpoint.y - 50}px`);
};
function loadDialogue() {
        boxClickable = true;

    // Different Dialogue actions
        let currentLine = levelData[currentLevel].dialogue[currentDia];
        switch (currentLine[0]) {
            case "SETTING":
                $('#dialogue-box').html(currentLine[1]);
                $('#dialogue-box').fadeIn(200);
                break;
            case "NEXT LEVEL":
                nextLevel();
                break;
            case "START LEVEL":
                startRound();
                break;
            default:
                let textColor = "white";
                for (let i=0; i<diaColors.length; i++) {
                    if (diaColors[i][0] === currentLine[0]) textColor = diaColors[i][1];
                }
                $('#dialogue-box').html(`<span style='color: ${textColor};'>${currentLine[0]}: ${currentLine[1]}</span>`);
                $('#dialogue-box').fadeIn(200);
                break;
        }

    // Unique Interactions
        if (currentLevel === 0 && currentDia === 5) displayFriend();
        if (currentLevel === 5 && currentDia === 2) {
            $('#gameplay-screen').addClass('shakingScreenInfClass');
            restartSound('Rumbling');
        }
        if (currentLevel === 5 && currentDia === 3) {
            setTimeout(function(){
                $('#gameplay-screen').removeClass('shakingScreenInfClass');
                pauseSound('Rumbling');
            },2000);
        }

};
let boxClickable = false;
function clickDialogueBox() {
    if (boxClickable === false) return;
    boxClickable = false;
    
    currentDia++;
    playSound('Dialogue');
    $('#dialogue-box').fadeOut(0);
    setTimeout(function() {
        loadDialogue();
    },500);

};



function startRound() {

    // Reset variables
        enemyList = [];
        timeRemaining = levelData[currentLevel].timeToSurvive * gameStat.fps;
        currentEnemyEl = 0;
    
    // Setup Screen
        $('#black-box').css('opacity','0.5');
        playSound('Lights Off');
        if (currentLevel === 5) restartSound('BG Music - Boss Battle Song');
        else restartSound('BG Music - Haunt Song');
        

    // Start the loop
        intervalVar = setInterval(function() {
            gameLoop();
        }, Math.round(1000 / gameStat.fps));

};
function gameLoop() {

    // Update variables
        timeRemaining--;
        if (timeRemaining <= 0) {
            levelComplete();
            return;
        }

    // Damage enemy
        if (hoveringEnemy !== false) {
            enemyList[hoveringEnemy].health--;
            if (enemyList[hoveringEnemy].health <= 0) {
                hoveringEnemy = false;
                restartSound('Flashlight Zap');
            }
        }

    // Spawn new enemy
        spawnNewEnemy();

    // Update the display
        let gameDis = ``;
        for (let i=0; i<enemyList.length; i++) {
            if (enemyList[i].health > 0) {

                // Update position
                    calculateMotion(i);

                // Calculate offsets
                    xOffset = enemyList[i].pos.x - (enemyList[i].size / 2);
                    yOffset = enemyList[i].pos.y - (enemyList[i].size / 2);

                // Add to display
                    gameDis += `<div class='ghost' style='
                        background-image: url("images/ghost/${enemyList[i].imgFile}.png");
                        bottom: ${yOffset}px;
                        height: ${enemyList[i].size}px;
                        left: ${xOffset}px;
                        width: ${enemyList[i].size}px;'
                        onmouseenter='hoverGhost(${i});'
                        onmouseleave='hoveringEnemy = false;'
                        ></div>`;

            }
        }
        $('#gameplay-content').html(gameDis);

};
function hoverGhost(i) {
    if (hoveringEnemy === false) restartSound("Flashlight Click");
    hoveringEnemy = i;
};



// Enemy Management
function spawnNewEnemy() {
    if (currentEnemyEl >= levelData[currentLevel].waves.length) return;
    let secondsElapsed = levelData[currentLevel].timeToSurvive - (timeRemaining / gameStat.fps);
    if (levelData[currentLevel].waves[currentEnemyEl][0] === secondsElapsed) {
        addEnemy(levelData[currentLevel].waves[currentEnemyEl][1]);
        currentEnemyEl++;
        spawnNewEnemy();
    }
};
function addEnemy(num) {
    // Get enemy data
        let newEnemy = JSON.parse(JSON.stringify(ghostData[num]));
        newEnemy.speed = Math.floor(newEnemy.speed / gameStat.fps);
        newEnemy.health = Math.floor(newEnemy.health * gameStat.fps);
        if (num === 3) {
            newEnemy.pos = {x: 400, y: 650}; // Boss Ghost
            playSound('Boss Spawn');
        }
        else {
            let currSpawnpoint = Math.floor(Math.random()*levelData[currentLevel].spawnpoints.length);
            if (currSpawnpoint === lastSpawnpoint) currSpawnpoint++;
            if (currSpawnpoint >= levelData[currentLevel].spawnpoints.length) currSpawnpoint = 0;
            lastSpawnpoint = JSON.parse(JSON.stringify(currSpawnpoint));
            console.log(currSpawnpoint);
            newEnemy.pos = JSON.parse(JSON.stringify(levelData[currentLevel].spawnpoints[currSpawnpoint]));
        }
    enemyList.push(newEnemy);
};
function calculateMotion(i) {

    // Get variables
        let pointA = enemyList[i].pos;
        let pointB = levelData[currentLevel].endpoint;

    // Find slope & distance
        let yDist = Math.abs(enemyList[i].pos.y - levelData[currentLevel].endpoint.y);
        let xDist = Math.abs(enemyList[i].pos.x - levelData[currentLevel].endpoint.x);
        let totalDistDiff = yDist + xDist;
        let yDistProp = yDist / totalDistDiff;
        let xDistProp = xDist / totalDistDiff;

    // Check for loss
        if (yDist < 50 && xDist < 50) {
            levelLost();
        }

    // Move enemy
        if (enemyList[i].pos.y > levelData[currentLevel].endpoint.y) enemyList[i].pos.y -= yDistProp * enemyList[i].speed;
        if (enemyList[i].pos.y < levelData[currentLevel].endpoint.y) enemyList[i].pos.y += yDistProp * enemyList[i].speed;
        if (enemyList[i].pos.x > levelData[currentLevel].endpoint.x) enemyList[i].pos.x -= xDistProp * enemyList[i].speed;
        if (enemyList[i].pos.x < levelData[currentLevel].endpoint.x) enemyList[i].pos.x += xDistProp * enemyList[i].speed;

};



// Lose Level
function levelLost() {
    clearInterval(intervalVar);
    $('#black-box').css('opacity','1.0');
    pauseSound('BG Music - Haunt Song');
    pauseSound('BG Music - Boss Battle Song');
    currentLevel--;
    setTimeout(function() {
        $('#gameplay-content').html("");
        hoveringEnemy = false;
    },200);
    setTimeout(function() {
        nextLevel();
    },3000);
};



// Complete Level
function levelComplete() {
    $('#gameplay-content').html("");
    $('#black-box').css('opacity','0');
    clearInterval(intervalVar);
    pauseSound('BG Music - Haunt Song');
    pauseSound('BG Music - Boss Battle Song');
    playSound('Level Complete');
    setTimeout(function() {
        nextLevel();
    },2500);
};
function nextLevel() {
    currentDia = 0;
    currentLevel++;
    hoveringEnemy = false;

    // Sounds
        if (currentLevel === 1) {pauseSound('BG Music - Sea Waves');}

    // End Game
        if (currentLevel === 7) {
            playerDataLH.completedGame = 1;
            setTimeout(function() {
                $('#the-end-title').fadeIn(2000);
                $('#black-box').fadeOut(0);
                $('#black-box').css('opacity','0.8');
                $('#black-box').fadeIn(2000);
                setTimeout(function() {
                    $('#the-end-title-two').fadeIn(500);
                    setTimeout(function() {
                        $('.main-div').fadeOut(3000);
                        setTimeout(function() {
                            pauseSound('BG Music - Final Scene');
                            loadArea('main-menu', true);
                        },4000);
                    },5500);
                },4000);
            },1000);
        }
        
    // Next Level
        else {
            $('.main-div').fadeOut(1000);
            setTimeout(function() {
                loadRoom(currentLevel);
            },1000);
        }
}