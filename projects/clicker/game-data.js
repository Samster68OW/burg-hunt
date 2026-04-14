// Building Data



const buildingData = [
    {
        name: "Hydro Hopper", baseCost: 15, baseCoinsPerSec: 0.02,
        flavorText: "We can use our coins to hire penguins to play minigames for us! Let's start with Ballistic Bis- I mean Hydro Hopper.",
        img: {hei: 40, wid: 50}
    },
    {
        name: "Bean Counters", baseCost: 100, baseCoinsPerSec: 0.1,
        flavorText: "Penguins love a good cup of coffee. Let's hire some aprons to energize the masses.",
        img: {hei: 40, wid: 42}
    },
    {
        name: "Ice Fishing", baseCost: 500, baseCoinsPerSec: 0.5,
        flavorText: "These penguins need some protein! Hire some penguins to pull Fluffies out of the frozen pond.",
        img: {hei: 40, wid: 43}
    },
    {
        name: "Puffle Roundup", baseCost: 2000, baseCoinsPerSec: 2.0,
        flavorText: "It looks like puffles have invaded the island! We need the Puffle Handlers!",
        img: {hei: 40, wid: 50}
    },
    {
        name: "Cart Surfer", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: "TODO",
        img: {hei: 40, wid: 45}
    },
    {
        name: "Pizzatron 3000", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: "TODO",
        img: {hei: 40, wid: 45}
    },
    {
        name: "Dance Contest", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: "The Party Starts Now!",
        img: {hei: 40, wid: 45}
    },
    {
        name: "Snow Trekker", baseCost: 0, baseCoinsPerSec: 0,
        flavorText: "Originally from the Nintendo DS game, Elite Penguin Force, there is no faster way to earn coins on Club Penguin Zero.",
        img: {hei: 40, wid: 42}
    }
];



const upgradeData = [
    // Clicking Upgrades
        {
            name: "Two Flippers", desc: "Earn 2 coins per click.", cost: 150,
            requirement: {type: "Building", building: 1, own: 1},
            effect: {type: "Click-Set", clickAmount: 2},
            flavorText: "You realize you have another flipper, right?"
        },
        {
            name: "Waddlin' Feet", desc: "Earn 4 coins per click.", cost: 400,
            requirement: {type: "Coin-Clicks", amount: 250},
            effect: {type: "Click-Set", clickAmount: 4},
            flavorText: "Use your feet to stomp on the coin!"
        },
        {
            name: "Jackhammer", desc: "Earn 10 coins per click.", cost: 1000,
            requirement: {type: "Coin-Clicks", amount: 500},
            effect: {type: "Click-Set", clickAmount: 10},
            flavorText: "You know what? Just AFK with the Jackhammer. I don't care."
        },
    // Hydro Hopper
        {
            name: "Extra Inner Tube", desc: "Doubles the CPS of Hydro Hopper.", cost: 250,
            requirement: {type: "Building", building: 0, own: 10},
            effect: {type: "Building-Mult", building: 0, mult: 2},
            flavorText: "Providing your penguins with an extra inner tube will let them survive longer in shark-infested waters."
        },
        {
            name: "Wakeboard", desc: "Triples the CPS of Hydro Hopper.", cost: 1000,
            requirement: {type: "Building", building: 0, own: 20},
            effect: {type: "Building-Mult", building: 0, mult: 3},
            flavorText: "Playing Hydro Hopper with a Wakeboard equipped earns you more coins when jumping over obstacles!"
        },
        {
            name: "Boat Captain", desc: "Your clicks are equal to the CPS of Hydro Hopper.", cost: 1500,
            requirement: {type: "Building", building: 0, own: 25},
            effect: {type: "Click-Building", building: 0},
            flavorText: "TODO"
        },
    // Bean Counters
        {
            name: "Imported Beans", desc: "Doubles the CPS of Bean Counters.", cost: 400,
            requirement: {type: "Building", building: 1, own: 10},
            effect: {type: "Building-Mult", building: 1, mult: 2},
            flavorText: "Can't a white boy speak a little italiano?"
        },
        {
            name: "Jellybean Counters", desc: "Triples the CPS of Bean Counters.", cost: 1600,
            requirement: {type: "Building", building: 1, own: 20},
            effect: {type: "Building-Mult", building: 1, mult: 3},
            flavorText: "The worst minigame for colorblind penguins."
        },
        {
            name: "Vertical Expansion", desc: "Your clicks are equal to the CPS of Bean Counters.", cost: 3000,
            requirement: {type: "Building", building: 1, own: 25},
            effect: {type: "Click-Building", building: 1},
            flavorText: "TODO"
        },
    // Ice Fishing
        {
            name: "Deep-Pond Knowledge", desc: "Doubles the CPS of Ice Fishing.", cost: 10000,
            requirement: {type: "Building", building: 2, own: 10},
            effect: {type: "Building-Mult", building: 2, mult: 2},
            flavorText: "Teach your penguins how to navigate around all the sea creatures to earn more coins."
        },
        {
            name: "Flashing Lure Fishing Rod", desc: "Triples the CPS of Ice Fishing.", cost: 20000,
            requirement: {type: "Building", building: 2, own: 20},
            effect: {type: "Building-Mult", building: 2, mult: 3},
            flavorText: "These grey fish are worth a lot of points!"
        },
        {
            name: "Ace Angler", desc: "Your clicks are equal to the CPS of Ice Fishing.", cost: 30000,
            requirement: {type: "Building", building: 2, own: 25},
            effect: {type: "Click-Building", building: 2},
            flavorText: "You've caught every fish in the pond!"
        },
    // Puffle Roundup
        {
            name: "TODO", desc: "Doubles the CPS of Puffle Roundup.", cost: 0,
            requirement: {type: "Building", building: 3, own: 10},
            effect: {type: "Building-Mult", building: 3, mult: 2},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Triples the CPS of Puffle Roundup.", cost: 0,
            requirement: {type: "Building", building: 3, own: 20},
            effect: {type: "Building-Mult", building: 3, mult: 3},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Your clicks are equal to the CPS of Puffle Roundup.", cost: 0,
            requirement: {type: "Building", building: 3, own: 25},
            effect: {type: "Click-Building", building: 3},
            flavorText: "TODO"
        }
];



const puffleData = [
    {
        name: "Blue Puffle", desc: "(Passive: Companion) Doubles the coins earned per click.", cost: 5000,
        num: 1, flavorText: "TODO"
    },
    {
        name: "Pink Puffle", desc: "(Passive: TODO) Receive 20% of your coins back when purchasing minigames and upgrades.", cost: 0,
        num: 2, flavorText: "TODO"
    },
    {
        name: "Green Puffle", desc: "(Passive: Circus) Every second, you have a 1/50 chance of earning a minute's worh of CPS.", cost: 0,
        num: 3, flavorText: "TODO"
    },
    {
        name: "Black Puffle", desc: "(Passive: Concentration) Every coin click makes your clicks stronger.", cost: 0,
        num: 4, flavorText: "TODO"
    },
    {
        name: "Purple Puffle", desc: "(Passive: Celebrity) Boosts a random minigame for 5 minutes. Once the 5 minutes are over, it picks a new one.", cost: 0,
        num: 5, flavorText: "TODO"
    },
    {
        name: "Red Puffle", desc: "(Passive: Completionist) Applies a CPS multiplier based on how many achievements you have collected.", cost: 0,
        num: 6, flavorText: "TODO"
    }
];



const abilityData = [
    {name: ""}
];



const achievementData = [
    // Lifetime Coins
        {
            name: "Welcome, P-num!", desc: "Earn your first coin.",
            criteria: {type: "Coins-Lifetime", amount: 1},
            flavorText: "It takes some time for usernames to be approved. Just enjoy playing the game while the staff work in the background."
        },
        {
            name: "YARRRR!", desc: "Earn 67 coins.",
            criteria: {type: "Coins-Lifetime", amount: 67},
            flavorText: "Rockhopper's favorite number."
        },
        {
            name: "Thousandaire", desc: "Earn 1 thousand lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000},
            flavorText: "In Club Penguin Zero you start with 500 coins. Congrats on doubling it."
        },
        {
            name: "At My Limit", desc: "Earn 100 thousand lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 100000},
            flavorText: "This is where I stopped in Zero. This is way more than the average player would need."
        },
        {
            name: "At the Game's Limit", desc: "Earn 1 million lifetime coins.",
            criteria: {type: "Coins-Lifetime", amount: 1000000},
            flavorText: "Club Penguin itself will stop giving you coins at this point. A few penguins have actually achieved this."
        },
    // Buildings
        {
            name: "Hydro Hoppin'", desc: "Hire a penguin to play Hydro Hopper.",
            criteria: {type: "Building-Amount", building: 0, amount: 1},
            flavorText: "Hydro Hopper was originally called Ballistic Biscuit."
        },
        {
            name: "Level 8", desc: "Hire 25 penguins to play Hydro Hopper.",
            criteria: {type: "Building-Amount", building: 0, amount: 25},
            flavorText: "How did all this junk wind up in the ocean?"
        },
        {
            name: "Minimum Wage", desc: "Hire a penguin to play Bean Counters.",
            criteria: {type: "Building-Amount", building: 1, amount: 1},
            flavorText: "Finally we can get a nice cup of coffee."
        },
        {
            name: "24 Hour Service", desc: "Hire 25 penguins to play Bean Counters.",
            criteria: {type: "Building-Amount", building: 1, amount: 25},
            flavorText: "One of the richest penguins on the island started this coffee shop. He outsourced the beans oversees and bought out his competition."
        },
        {
            name: "TODO", desc: "Hire a penguin to play Ice Fishing.",
            criteria: {type: "Building-Amount", building: 2, amount: 1},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire 25 penguins to play Ice Fishing.",
            criteria: {type: "Building-Amount", building: 2, amount: 25},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire a penguin to play Puffle Roundup.",
            criteria: {type: "Building-Amount", building: 3, amount: 1},
            flavorText: "TODO"
        },
        {
            name: "TODO", desc: "Hire 25 penguins to play Puffle Roundup.",
            criteria: {type: "Building-Amount", building: 3, amount: 25},
            flavorText: "TODO"
        }
];