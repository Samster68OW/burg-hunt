// Game Code


const gameWorld = {
    framesPerSecond: 60,
    size: {width: 900, height: 600},
    groundFriction: 0.4,
    gravity: 0.5
};



let playerObject = {
    pos: {x: 100, y: 10},
    size: {width: 30, height: 60},
    vel: {x: 0, y: 0},
    maxVel: {x: 4, y: 200},
    acc: {x: 0, y: 0},
    onGround: false,
    walkingAcc: 1.2,
    jumpingVel: 11,
    zeroMargin: {x: 0.3, y: 0.1}
};



let gameLoop;
function startGameLoop() {
    gameLoop = setInterval(function() {
        setPlayerPos();
    }, Math.floor(1000 / gameWorld.framesPerSecond));
};



function setPlayerPos() {

    // Set acceleration
        if (buttonStatus.left === true) {playerObject.acc.x = playerObject.walkingAcc * -1;}
        if (buttonStatus.right === true) {playerObject.acc.x = playerObject.walkingAcc;}
        if (buttonStatus.left === false && buttonStatus.right === false) {playerObject.acc.x = 0;}
        if (playerObject.onGround === false) {playerObject.acc.y = gameWorld.gravity * -1;}
        if (buttonStatus.space === true && playerObject.onGround === true) {
            playerObject.vel.y += playerObject.jumpingVel;
            playerObject.onGround = false;
        }
    
    // Add acceleration
        if (playerObject.vel.x > 0) {playerObject.acc.x -= gameWorld.groundFriction;}
        if (playerObject.vel.x < 0) {playerObject.acc.x += gameWorld.groundFriction;}
        playerObject.vel.x += playerObject.acc.x;
        playerObject.vel.y += playerObject.acc.y;

    // Clean up velocities
        if (playerObject.vel.x < playerObject.zeroMargin.x && playerObject.vel.x > playerObject.zeroMargin.x * -1) {playerObject.vel.x = 0;}
        if (playerObject.vel.y < playerObject.zeroMargin.y && playerObject.vel.y > playerObject.zeroMargin.y * -1) {playerObject.vel.y = 0;}
        if (playerObject.vel.x > playerObject.maxVel.x) {playerObject.vel.x = playerObject.maxVel.x;}
        if (playerObject.vel.x < playerObject.maxVel.x * -1) {playerObject.vel.x = playerObject.maxVel.x * -1;}
        if (playerObject.vel.y > playerObject.maxVel.y) {playerObject.vel.y = playerObject.maxVel.y;}
        if (playerObject.vel.y < playerObject.maxVel.y * -1) {playerObject.vel.y = playerObject.maxVel.y * -1;}

    // Add velocities
        playerObject.pos.x += playerObject.vel.x;
        playerObject.pos.y += playerObject.vel.y;

    // Frame boundaries
        if (playerObject.pos.x < 0) {
            loadRoom(currentRoom.roomID - 1);
            playerObject.pos.x = gameWorld.size.width - playerObject.size.width - 10;
        }
        if (playerObject.pos.x > gameWorld.size.width - playerObject.size.width) {
            loadRoom(currentRoom.roomID + 1);
            playerObject.pos.x = 10;
        }
        if (playerObject.pos.y < 0) {
            loadRoom(currentRoom.roomID + 10);
            playerObject.pos.y = gameWorld.size.height - playerObject.size.height - 10;
        }
        if (playerObject.pos.y > gameWorld.size.height - playerObject.size.height) {
            loadRoom(currentRoom.roomID - 10);
            playerObject.pos.y = 10;
        }

    // Check collision with other objects
        checkPlayerCollision();

    // Set player's position
        $('#player-object').css('left', `${playerObject.pos.x}px`);
        $('#player-object').css('bottom', `${playerObject.pos.y}px`);
        $('#info-spot').html(`<br>pos.x: ${playerObject.pos.x}<br>vel.x: ${playerObject.vel.x}<br>acc.x: ${playerObject.acc.x}`);
        $('#info-spot-2').html(`<br>pos.y: ${playerObject.pos.y}<br>vel.y: ${playerObject.vel.y}<br>acc.y: ${playerObject.acc.y}`);

};



function checkPlayerCollision() {

    // Set up player's corners
        let playerCorner = [
            {
                x: playerObject.pos.x,
                y: playerObject.pos.y,
                colliding: false
            },
            {
                x: playerObject.pos.x,
                y: playerObject.pos.y + playerObject.size.height,
                colliding: false
            },
            {
                x: playerObject.pos.x + playerObject.size.width,
                y: playerObject.pos.y,
                colliding: false
            },
            {
                x: playerObject.pos.x + playerObject.size.width,
                y: playerObject.pos.y + playerObject.size.height,
                colliding: false
            }
        ];

    // Check the platforms
        let standing = false;
        for (var a=0; a<currentRoom.platform.length; a++) {
            
            // Check each corner
            for (var b=0; b<playerCorner.length; b++) {
                playerCorner[b].colliding = false;
                if (playerCorner[b].x >= currentRoom.platform[a].bottomLeft.x && playerCorner[b].y >= currentRoom.platform[a].bottomLeft.y) {
                    if (playerCorner[b].x <= currentRoom.platform[a].topRight.x && playerCorner[b].y <= currentRoom.platform[a].topRight.y) {
                        playerCorner[b].colliding = true;
                    }
                }
            }

            // Calculate results
            // Bottom corners
                if (playerCorner[0].colliding === true && playerCorner[2].colliding === true) {
                    playerObject.onGround = true;
                    standing = true;
                    playerObject.pos.y = currentRoom.platform[a].topRight.y;
                    playerObject.vel.y = 0;
                    playerObject.acc.y = 0;
                }
                if (playerCorner[0].colliding === true | playerCorner[2].colliding === true) {
                    standing = true;
                }
            // Left corners
                if (playerCorner[0].colliding === true && playerCorner[1].colliding === true) {
                    playerObject.pos.x = currentRoom.platform[a].topRight.x;
                    playerObject.vel.x = 0;
                    playerObject.acc.x = 0;
                }
            // Right corners
                if (playerCorner[2].colliding === true && playerCorner[3].colliding === true) {
                    playerObject.pos.x = currentRoom.platform[a].bottomLeft.x - playerObject.size.width;
                    playerObject.vel.x = 0;
                    playerObject.acc.x = 0;
                }
            // Top corners
                if (playerCorner[1].colliding === true && playerCorner[3].colliding === true) {
                    playerObject.pos.y = currentRoom.platform[a].bottomLeft.y - playerObject.size.height;
                    playerObject.vel.y = 0;
                    playerObject.acc.y = 0;
                }
            // BottomLeft Corner
                if (playerCorner[0].colliding === true) {
                    let xDist = Math.abs(currentRoom.platform[a].topRight.x - playerCorner[0].x);
                    let yDist = Math.abs(currentRoom.platform[a].topRight.y - playerCorner[0].y);
                    if (xDist > yDist) {
                        playerObject.onGround = true;
                        standing = true;
                        playerObject.pos.y = currentRoom.platform[a].topRight.y;
                        playerObject.vel.y = 0;
                        playerObject.acc.y = 0;
                    }
                    else if (yDist > xDist) {
                        playerObject.pos.x = currentRoom.platform[a].topRight.x;
                        playerObject.vel.x = 0;
                        playerObject.acc.x = 0;
                    }
                }
            // TopLeft Corner
                if (playerCorner[1].colliding === true) {
                    let xDist = Math.abs(currentRoom.platform[a].topRight.x - playerCorner[1].x);
                    let yDist = Math.abs(currentRoom.platform[a].bottomLeft.y - playerCorner[1].y);
                    if (xDist > yDist) {
                        playerObject.pos.y = currentRoom.platform[a].bottomLeft.y - playerObject.size.height;
                        playerObject.vel.y = 0;
                        playerObject.acc.y = 0;
                    }
                    else if (yDist > xDist) {
                        playerObject.pos.x = currentRoom.platform[a].topRight.x;
                        playerObject.vel.x = 0;
                        playerObject.acc.x = 0;
                    }
                }
            // BottomRight Corner
                if (playerCorner[2].colliding === true) {
                    let xDist = Math.abs(currentRoom.platform[a].bottomLeft.x - playerCorner[2].x);
                    let yDist = Math.abs(currentRoom.platform[a].topRight.y - playerCorner[2].y);
                    if (xDist > yDist) {
                        playerObject.onGround = true;
                        standing = true;
                        playerObject.pos.y = currentRoom.platform[a].topRight.y;
                        playerObject.vel.y = 0;
                        playerObject.acc.y = 0;
                    }
                    else if (yDist > xDist) {
                        playerObject.pos.x = currentRoom.platform[a].bottomLeft.x - playerObject.size.width;
                        playerObject.vel.x = 0;
                        playerObject.acc.x = 0;
                    }
                }
            // TopRight Corner
                if (playerCorner[3].colliding === true) {
                    let xDist = Math.abs(currentRoom.platform[a].bottomLeft.x - playerCorner[3].x);
                    let yDist = Math.abs(currentRoom.platform[a].bottomLeft.y - playerCorner[3].y);
                    if (xDist > yDist) {
                        playerObject.pos.y = currentRoom.platform[a].bottomLeft.y - playerObject.size.height;
                        playerObject.vel.y = 0;
                        playerObject.acc.y = 0;
                    }
                    else if (yDist > xDist) {
                        playerObject.pos.x = currentRoom.platform[a].bottomLeft.x - playerObject.size.width;
                        playerObject.vel.x = 0;
                        playerObject.acc.x = 0;
                    }
                }

        }
        if (standing === false) {
            playerObject.onGround = false;
        }

};



// Input
let buttonStatus = {
    left: false,
    right: false,
    space: false
};
function keyboardInput(input) {
    switch (input) {
        case 'ArrowLeft':
            buttonStatus.left = true;
            break;
        case 'ArrowRight':
            buttonStatus.right = true;
            break;
        case ' ':
            buttonStatus.space = true;
            break;

    };
};
function keyboardOutput(input) {
    switch (input) {
        case 'ArrowLeft':
            buttonStatus.left = false;
            break;
        case 'ArrowRight':
            buttonStatus.right = false;
            break;
        case ' ':
            buttonStatus.space = false;
            break;
    };
};