// Room Data



const roomData = [
    {
        name: "Room (0,0)",
        platform: [
            {
                platformID: 0,
                pos: {x: 0, y: 0}
            },
            {
                platformID: 1,
                pos: {x: 300, y: 20}
            },
            {
                platformID: 1,
                pos: {x: 460, y: 90}
            },
            {
                platformID: 1,
                pos: {x: 600, y: 130}
            },
        ]
    },
    {
        name: "Room (1,0)",
        platform: [
            {
                platformID: 0,
                pos: {x: 0, y: 0}
            }
        ]
    }
];



const platformData = [
    {
        name: "Ground",
        size: {width: 900, height: 20},
        color: "white",
        zIndex: 5,
        prop: {collide: true}
    },
    {
        name: "Basic Platform",
        size: {width: 100, height: 80},
        color: "blue",
        zIndex: 4,
        prop: {collide: true}
    }
];