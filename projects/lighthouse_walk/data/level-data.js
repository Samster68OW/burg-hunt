// Level Data



const levelData = [

    {
        name: "Intro: The Cove",
        dialogue: [
            ["SETTING", "Uh, oh. It looks like the sun has gone down. (Click this box to continue.)"],
            ["SETTING", "You've had a long day of exploring the island, hanging out with friends, and sitting around the fire."],
            ["SETTING", "You must've dozed off. It looks like everyone has left."],
            ["SETTING", "Oh well. It's time to head back to your igloo."],
            ["?????", "Pssst! Hey, are you awake?"],
            ["Orange Penguin", "Yo, what's up? I thought I was the only one out here."],
            ["Orange Penguin", "I'm SurferBro27, nice to meet ya!"],
            ["SurferBro27", "Hey, could you, like, help me with something?"],
            ["SurferBro27", "I'm trying to get to a wicked party on the other side of the island, but I left my flashlight at my igloo."],
            ["SurferBro27", "I see you have one. Want to walk over to the party at the Lighthouse together?"],
            ["SurferBro27", "Great, thanks! Follow me, dude!"],
            ["NEXT LEVEL"]
        ],
        endpoint: {x: 680, y: 410}
    },
    {
        name: "Level 1: The Forest",
        dialogue: [
            ["SurferBro27", "Hmmm... It's getting pretty dark. Better keep a firm grip on that flashlight."],
            ["SurferBro27", "Wait, did you hear that? I heard rustling coming from the trees."],
            ["SurferBro27", "I think something is nearby."],
            ["SurferBro27", "If you see something move, shine your flashlight on it using your mouse! (You do not need to click.)"],
            ["START LEVEL"]
        ],
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
        dialogue: [
            ["SurferBro27", "That was a close one! Were those ghosts?"],
            ["SurferBro27", "Bro, I didn't know there were ghosts on Club Penguin Island! I thought there was no such thing as ghosts!"],
            ["SurferBro27", "Well your flashlight seemed to scare them off. Keep your guard up, I think more are on the way."],
            ["SurferBro27", "It looks like the ghosts retain damage even if you look away from them. Change your target if a different ghost seems like a larger threat."],
            ["START LEVEL"]
        ],
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
        dialogue: [
            ["SurferBro27", "These ghosts sure are persistent, man!"],
            ["SurferBro27", "It looks like another wave is here. I see some larger ghosts this time. Watch out!"],
            ["START LEVEL"]
        ],
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
        dialogue: [
            ["SurferBro27", "Good, we made it back to Town! We're over halfway to the Lighthouse."],
            ["SurferBro27", "I'm not sure why these ghosts are attacking us."],
            ["SurferBro27", "Did we upset them somehow? We're just trying to get to the party!"],
            ["SurferBro27", "Uh, oh. Here comes more ghosts! Good luck!"],
            ["START LEVEL"]
        ],
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
        dialogue: [
            ["SurferBro27", "We're almost there! The Lighthouse is just past the dock."],
            ["SurferBro27", "This is pretty spooky. Where do you think all these ghosts are coming from?"],
            ["SurferBro27", "Wait... do you feel the ground shaking, dude?"],
            ["START LEVEL"]
        ],
        waves: [
            [1, 3],
            [5, 0], [6, 1],
            [10, 2], [11, 2], [12, 2], [13, 2], [14, 2],
            [17, 1], [17, 1], [17, 0], [17, 0],
            [22, 2], [22, 2], [22, 2],
            [34, 2], [34, 2], [34, 2], [35, 2], [35, 2], [35, 2], [36, 2], [36, 2], [36, 2],
        ],
        timeToSurvive: 37,
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
        dialogue: [
            ["SETTING", "You arrive at the Lighthouse. You can hear music coming from the party inside."],
            ["SETTING", "You knock on the door. A moment later, a purple penguin opens it."],
            ["Party Host", "Hey, welcome to the party! All by yourself tonight?"],
            ["SETTING", "You turn around and realize that the penguin you were following is gone."],
            ["SETTING", "You ask the party host if they know SurferBro27."],
            ["Party Host", "SurferBro27? Never heard of him. Is he a new penguin?"],
            ["SETTING", "You shrug your shoulders."],
            ["Party Host", "Well he's welcome to join us if he shows up. Come on inside!"],
            ["SETTING", "The host steps to the side as you enter the Lighthouse."],
            ["SETTING", "The music is loud as penguins dance, chat, and play games into the night."],
            ["SETTING", "You're not sure if the events that happened that night were real or not."],
            ["SETTING", "But as the party continues and you laugh along with your friends, you realize that it probably doesn't matter."],
            ["SETTING", "After all, there's no such thing as ghosts, right?"],
            ["NEXT LEVEL"]
        ]
    },

];



const diaColors = [
    ["?????","#ff9d3a"],
    ["Orange Penguin","#ff9d3a"],
    ["SurferBro27","#ff9d3a"],
    ["Party Host","#c679fa"]
];