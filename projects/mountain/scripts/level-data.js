// Room Data



const roomData = [
    // Row 0
    {
        name: "Room (0,0)",
        platform: [
            {
                platformID: 0,
                pos: {x: 0, y: 0}
            },
            {
                platformID: 0,
                pos: {x: 0, y: 580}
            },
            {
                platformID: 1,
                pos: {x: 0, y: 0}
            },
            {
                platformID: 2,
                pos: {x: 300, y: 20}
            },
            {
                platformID: 2,
                pos: {x: 500, y: 70}
            },
            {
                platformID: 2,
                pos: {x: 500, y: 20}
            },
            {
                platformID: 2,
                pos: {x: 700, y: 120}
            },
        ]
    },
    {
        name: "Room (1,0)",
        platform: [
            {
                platformID: 0,
                pos: {x: 0, y: 0}
            },
            {
                platformID: 0,
                pos: {x: 0, y: 580}
            },
            {
                platformID: 2,
                pos: {x: 0, y: 120}
            },
            {
                platformID: 2,
                pos: {x: 300, y: 20}
            },
            {
                platformID: 3,
                pos: {x: 500, y: 20}
            },
        ]
    }
    // Row 1
    // Row 2
    // Row 3
    // Row 4
    // Row 5
    // Row 6
    // Row 7
    // Row 8
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
        name: "Left Wall",
        size: {width: 20, height: 600},
        color: "white",
        zIndex: 5,
        prop: {collide: true}
    },
    {
        name: "Basic Platform",
        size: {width: 200, height: 80},
        color: "blue",
        zIndex: 4,
        prop: {collide: true}
    },
    {
        name: "Ice Spikes",
        size: {width: 100, height: 40},
        color: "red",
        zIndex: 4,
        prop: {collide: true}
    }
];