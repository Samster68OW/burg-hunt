// Level Data



let levelData = [

    {
        name: "Intro: The Cove",
        prop: {friend: false, bgMusic: 'BG Music - Sea Waves', damage: 1},
        endpoint: {x: 680, y: 410}
    },
    {
        name: "Level 1: The Forest",
        prop: {friend: 'surferbro', bgMusic: false, damage: 1},
        waves: [
            [3, 0],
            [8, 0], [9, 0], [10, 0],
            [15, 0], [16, 0], [17, 0], [18, 0], [19, 0],
            [22, 0], [22, 0], [22, 0]
        ],
        timeToSurvive: 30,
        endpoint: {x: 800, y: 220},
        spawnpoints: [
            {x: 50, y: 350},
            {x: 50, y: 550},
            {x: 50, y: 750},
            {x: 250, y: 750},
            {x: 450, y: 750}
        ]
    },
    {
        name: "Level 2: The Plaza",
        prop: {friend: 'surferbro', bgMusic: false, damage: 1},
        waves: [
            [3, 0],
            [7, 0], [7, 0],
            [11, 0], [11, 0], [11, 0],
            [15, 0], [15, 0], [15, 0], [15, 0],
            [22, 0], [22.5, 0], [23, 0], [23.5, 0], [24, 0]
        ],
        timeToSurvive: 35,
        endpoint: {x: 600, y: 200},
        spawnpoints: [
            {x: 100, y: 750},
            {x: 300, y: 750},
            {x: 500, y: 750},
            {x: 700, y: 750},
            {x: 900, y: 750},
            {x: 1100, y: 750}
        ]
    },
    {
        name: "Level 3: Snow Forts",
        prop: {friend: 'surferbro', bgMusic: false, damage: 1},
        waves: [
            [3, 0],
            [8, 0], [8, 0], [10, 1],
            [15, 1], [17, 1], [19, 1], [21, 0], [21, 0],
            [24, 1], [24, 0], [24, 0],
            [26, 0], [26, 0]
        ],
        timeToSurvive: 40,
        endpoint: {x: 450, y: 200},
        spawnpoints: [
            {x: 50, y: 600},
            {x: 50, y: 400},
            {x: 1150, y: 600},
            {x: 1150, y: 400},
            {x: 1150, y: 200}
        ]
    },
    {
        name: "Level 4: The Town",
        prop: {friend: 'surferbro', bgMusic: false, damage: 1},
        waves: [
            [3, 0], [3, 0], [3, 0],
            [7, 1], [7, 1],
            [10, 2],
            [13, 2], [13.5, 2], [15, 2],
            [18, 1], [19, 1], [20, 2], [21, 2],
            [23, 2], [23, 2],
            [25, 0], [25, 1], [25, 2], [25, 0], [25, 1], [25, 2],
            [30, 2], [30, 2], [30, 2], [30, 2]
        ],
        timeToSurvive: 40,
        endpoint: {x: 600, y: 200},
        spawnpoints: [
            {x: 100, y: 750},
            {x: 300, y: 750},
            {x: 500, y: 750},
            {x: 700, y: 750},
            {x: 900, y: 750},
            {x: 1100, y: 750}
        ]
    },
    {
        name: "Level 5: The Dock",
        prop: {friend: 'surferbro', bgMusic: false, damage: 1},
        waves: [
            [1, 3],
            [5, 0], [6, 1],
            [10, 2], [11, 2], [12, 2], [13, 2], [14, 2],
            [17, 1], [17, 1], [17, 0], [17, 0],
            [22, 2], [22, 2], [22, 2], [22, 0],
            [34, 2], [34, 2], [34, 2], [35, 2], [35, 2], [35, 2], [36, 2], [36, 2], [36, 2]
        ],
        timeToSurvive: 38,
        endpoint: {x: 800, y: 250},
        spawnpoints: [
            {x: 50, y: 700},
            {x: 50, y: 600},
            {x: 50, y: 400},
            {x: 50, y: 200},
            {x: 1150, y: 700},
            {x: 1150, y: 600}
        ]
    },
    {
        name: "Outro: The Beach",
        prop: {friend: false, bgMusic: 'BG Music - Final Scene', damage: 1}
    },
    {
        name: "Bonus Intro: Ski Village",
        prop: {friend: 'gary', bgMusic: false, damage: 1},
        endpoint: {x: 550, y: 300}
    },
    {
        name: "Bonus Level 1: Ski Hill",
        prop: {friend: 'gary', bgMusic: false, damage: 2},
        waves: [
            [3, 0], [3, 0], [3, 0],
            [5, 1], [5, 1],
            [7, 2], [7, 2], [7, 2], [7, 2], [7, 2],
            [12, 0], [12, 1], [12, 0],
            [15, 1], [15, 2], [15, 2], [15, 2],
            [19, 0], [19, 0], [19, 0], [19, 0], [19, 0],
            [20, 2], [20, 2], [20, 2],
            [23, 0], [23, 1], [23, 2], [23, 0], [23, 1], [23, 2],
            [26, 2], [26, 2], [26, 2], [26, 2],
            [27, 0], [27, 0], [27, 0], [27, 0]
        ],
        timeToSurvive: 38,
        endpoint: {x: 600, y: 350},
        spawnpoints: [
            {x: 100, y: 750},
            {x: 300, y: 750},
            {x: 500, y: 750},
            {x: 700, y: 750},
            {x: 900, y: 750},
            {x: 1100, y: 750}
        ]
    },
    {
        name: "Bonus Level 2: Outer Box Dimension",
        prop: {friend: 'gary', bgMusic: false, damage: 2},
        waves: [
            [3, 0], [3, 0], [3, 0],
            [5, 1], [5, 1],
            [6, 1], [6, 1],
            [7, 2], [7, 2], [7, 2], [7, 2], [7, 2],
            [12, 0], [12, 1], [12, 0],
            [15, 1], [15, 2], [15, 2], [15, 2],
            [19, 0], [19, 0], [19, 0], [19, 0], [19, 0],
            [20, 2], [20, 2], [20, 2],
            [23, 0], [23, 1], [23, 2], [23, 0], [23, 1], [23, 2],
            [26, 2], [26, 2], [26, 2], [26, 2],
            [27, 0], [27, 0], [27, 0], [27, 0],
            [28, 1], [28, 1], [28, 1],
            [35, 0], [35, 0], [35, 0], [35, 0]
        ],
        timeToSurvive: 48,
        endpoint: {x: 900, y: 250},
        spawnpoints: [
            {x: 50, y: 150},
            {x: 50, y: 350},
            {x: 50, y: 550},
            {x: 50, y: 750},
            {x: 250, y: 750},
            {x: 450, y: 750},
            {x: 650, y: 750}
        ]
    },
    {
        name: "Bonus Level 3: Burg's Buyout",
        prop: {friend: 'gary', bgMusic: false, damage: 2},
        waves: [
            [3, 0], [3, 0], [3, 0],
            [5, 1], [5, 1],
            [6, 1], [6, 1],
            [7, 2], [7, 2], [7, 2], [7, 2], [7, 2],
            [10, 3],
            [12, 0], [12, 1], [12, 0],
            [15, 1], [15, 2], [15, 2], [15, 2],
            [19, 0], [19, 0], [19, 0], [19, 0], [19, 0],
            [20, 2], [20, 2], [20, 2],
            [23, 0], [23, 1], [23, 2], [23, 0], [23, 1], [23, 2],
            [26, 2], [26, 2], [26, 2], [26, 2],
            [27, 0], [27, 0], [27, 0], [27, 0],
            [28, 1], [28, 1], [28, 1],
            [31, 2],
            [35, 0], [35, 0], [35, 0], [35, 0]
        ],
        timeToSurvive: 55,
        endpoint: {x: 200, y: 450},
        spawnpoints: [
            {x: 1150, y: 700},
            {x: 1150, y: 600},
            {x: 1150, y: 500},
            {x: 1150, y: 400},
            {x: 1150, y: 300},
            {x: 1150, y: 200},
            {x: 1150, y: 100}
        ]
    },
    {
        name: "Bonus Cutscene: The Beast",
        prop: {friend: 'samster', bgMusic: false, damage: 1},
        endpoint: {x: 600, y: 400}
    },
    {
        name: "Bonus Outro: The Town",
        prop: {friend: 'gary', bgMusic: 'BG Music - Final Scene', damage: 1},
        endpoint: {x: 850, y: 250}
    }

];



let diaColors = [];