// Start Room



let currentRoom = {};



function loadRoom(num) {

    // Stop loop
        clearInterval(gameLoop);

    // Get room data
        let room = roomData[num];
        currentRoom = {
            roomID: num,
            name: room.name,
            platform: []
        };

    // Generate the objects
        let display = `<div id='player-object'></div>`;
        for (var a=0; a<room.platform.length; a++) {
            let currPlatform = platformData[room.platform[a].platformID];
            display += `<div class='platform-object' style='background-color:${currPlatform.color}; width:${currPlatform.size.width}px; height:${currPlatform.size.height}px; left:${room.platform[a].pos.x}px; bottom:${room.platform[a].pos.y}px; z-index:${currPlatform.zIndex}'></div>`;
            // Add to list
                currentRoom.platform.push({
                    platformID: room.platform[a].platformID,
                    bottomLeft: room.platform[a].pos,
                    topRight: {
                        x: room.platform[a].pos.x + currPlatform.size.width,
                        y: room.platform[a].pos.y + currPlatform.size.height,
                    }
                });
        }
        $('#game-frame').html(display);

    // Get it started!
        startGameLoop();

};